'use client'

import { addPolygon } from "@/redux/features/polygon-slice";
import Canvas from "./Canvas"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addLine } from "@/redux/features/line-analysis-slice";
// import toast, { Toaster } from 'react-hot-toast';


export const ImageEditor = ({ patientAnalysis, searchParams } : { patientAnalysis : any, searchParams: any }) => {
    const dispatch = useDispatch();

    const polygons = useSelector((state: any) => state.Polygon.polygons)
    const lines = useSelector((state: any) => state.Line.lines)

    const [prediction, setPrediction] = useState(patientAnalysis.data.diagonsis.predictions.filter((prediction: any) => prediction.image_name === searchParams.image ));
    const [imageData, setImageData] = useState({ imageWidth: prediction[0].metadata.imageWidth, imageHeight: prediction[0].metadata.imageHeight })
    console.log('prex', prediction)

      
    function denormalizePoints(normalizedPoints: any, minX: number, maxX: number, minY: number, maxY: number) {
      return normalizedPoints.map((point: any) => ({
          x: point.x * (maxX - minX) + minX,
          y: point.y * (maxY - minY) + minY
      }));
    }

    function normalizePoints(points: any[], minX: number, maxX: number, minY: number, maxY: number) {
        return points.map((point: any) => ({
            x: (point.x - minX) / (maxX - minX),
            y: (point.y - minY) / (maxY - minY)
        }));
    }

    function normalizeLinePoints(points: number[], minX: number, maxX: number, minY: number, maxY: number) {
        const normalizedPoints: number[] = [];
        
        // Iterate over the points array in pairs
        for (let i = 0; i < points.length; i += 2) {
            const x = points[i];
            const y = points[i + 1];
            // Normalize x and y coordinates and push them to the normalizedPoints array
            normalizedPoints.push(
                (x - minX) / (maxX - minX),  // Normalized x coordinate
                (y - minY) / (maxY - minY)   // Normalized y coordinate
            );
        }
        
        return normalizedPoints;
    }
    

    function initializeState()  {
        prediction[0].diagnostic.map((d: any, index: number) => {
            const points = denormalizePoints(d.mask_points, 0, (imageData.imageWidth / imageData.imageHeight) * 800, 0, 800)
            const flattenedPoints = points
            .map(({ x, y } : { x: any, y: any}) => [x, y])
            .concat()
            .reduce((a: any, b: any) => a.concat(b), []);
            console.log(flattenedPoints)
            dispatch(addPolygon({
                shape: 'Polygon',
                status: 'Completed',
                id: d.class_id,
                label: d.class_name,
                confidence: d.confidence,
                points,
                flattenedPoints,
            }))
        })

        prediction[0].bone_loss.length > 0 && prediction[0].bone_loss.map((bl: any) => {
            const points = denormalizePoints([bl.cej_bone_pair.bone_point, bl.cej_bone_pair.enamel_point],0, (imageData.imageWidth / imageData.imageHeight) * 800, 0, 800);

            const flattenedPoints = points
            .map(({ x, y } : { x: any, y: any}) => [x, y])
            .concat()
            .reduce((a: any, b: any) => a.concat(b), []);
            console.log('bl', bl)
            dispatch(addLine({
                shape: 'Line',
                status: 'Completed',
                flattenedPoints,
                boneloss: bl.boneloss,
                cost: bl.cost || 0,
                distance:bl.distance
            }))
        })        
    }
    
    useEffect(() => {
        initializeState()
    
    }, [])

    const onSave = async () => {
        const diagnosis = 
        polygons.map((polygon: any) => {
            return {
                class_id: polygon.id,
                class_name: polygon.label,
                mask_points: normalizePoints(polygon.points, 0, (imageData.imageWidth / imageData.imageHeight) * 800, 0, 800),
                confidence: polygon.confidence
            }

        })

        const bone_loss = 
        lines.map((line: any) => {
            const points = normalizeLinePoints(line.flattenedPoints, 0, (imageData.imageWidth / imageData.imageHeight) * 800, 0, 800 )
            return {
                boneloss: line.boneloss,
                cej_bone_pair: {
                    bone_point: {
                        x: points[0],
                        y: points[1]
                    },
                    enamel_point: {
                        x: points[2],
                        y: points[3]
                    }
                },
                cost: line.cost,
                distance: line.distance
            }
        })  

        console.log(bone_loss)

        const patientAnalysisCopy = patientAnalysis;
        patientAnalysisCopy.data.diagonsis.predictions.forEach((prediction: any) => {
            if(prediction.image_name === searchParams.image) {
                console.log('found')
                prediction.diagnostic = diagnosis;
                prediction.bone_loss = bone_loss;
            }
        })

        const response  = await fetch(`http://localhost:3000/api/prediction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ predictions: patientAnalysisCopy.data.diagonsis.predictions, checkup_id: searchParams.checkupId  })
        })

        // toast.success('Successfully saved')
    
        console.log(response);
        console.log('Diagnosis', diagnosis)
        console.log('PatientAnalysisCopy', patientAnalysisCopy)
    }



    return (
        <Canvas 
            onSave={onSave}
            imageUrl={`http://103.217.176.51:8000/media/${searchParams.image}`}
            imageData={imageData}
            diagnostic={prediction[0].diagnostic}
            findings={prediction[0].metadata.modelClasses.diagnostic}
        />

    )
}