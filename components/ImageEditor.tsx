'use client'

import { addPolygon } from "@/redux/features/polygon-slice";
import Canvas from "./Canvas"
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";


export const ImageEditor = ({ patientAnalysis, searchParams } : { patientAnalysis : any, searchParams: any }) => {
    const dispatch = useDispatch();

    const polygons = useSelector((state: any) => state.Polygon.polygons)

    const prediction = patientAnalysis.data.diagonsis.predictions.filter((prediction: any) => prediction.image_name === searchParams.image );
    console.log(patientAnalysis)
    const imageData = { imageWidth: prediction[0].metadata.imageWidth, imageHeight: prediction[0].metadata.imageHeight }
      
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
    
    useEffect(() => {

        prediction[0].diagnostic.map((d: any, index: number) => {
            const points = denormalizePoints(d.mask_points, 0, imageData.imageWidth, 0, imageData.imageHeight)
            const flattenedPoints = points
            .map(({ x, y } : { x: any, y: any}) => [x, y])
            .concat()
            .reduce((a: any, b: any) => a.concat(b), []);
    
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
    }, [])

    const onSave = () => {
        console.log('saved')
        const diagnosis = 
        polygons.map((polygon: any) => {
            return {
                class_id: polygon.id,
                class_name: polygon.label,
                mask_points: normalizePoints(polygon.points, 0, imageData.imageWidth, 0, imageData.imageHeight),
                confidence: polygon.confidence
            }

        })

        const patientAnalysisCopy = patientAnalysis;
        patientAnalysisCopy.data.diagonsis.predictions.forEach((prediction: any) => {
            if(prediction.image_name === searchParams.image) {
                console.log('found')
                prediction.diagnostic = diagnosis;
            }
        })

        console.log('Diagnosis', diagnosis)
        console.log('PatientAnalysisCopy', patientAnalysisCopy)
    }



    return (
        <Canvas 
            onSave={onSave}
            imageUrl={`http://103.217.176.51:8000/media/${searchParams.image}`}
            imageData={imageData}
            diagnostic={prediction[0].diagnostic}
        />
    )
}