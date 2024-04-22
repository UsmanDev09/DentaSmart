import React, { useMemo, useRef, useState, useEffect } from "react";
import PolygonAnnotation from "./PolygonAnnotation";
import { Stage, Layer, Image as KonvaImage, Rect, Label, Tag, Text } from "react-konva";
import Image from "next/image";
import { useSelector } from "react-redux";

import { Button } from "./ui/button";
import { addPolygon, deletePolygon, editPolyLabel } from "@/redux/features/polygon-slice";
import { addRectangle, removeRectangle, editRectLabel } from "@/redux/features/rectangle-slice";
import { useDispatch,  } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { nanoid } from "@reduxjs/toolkit";
import { Tabs, TabsList,TabsContent, TabsTrigger } from "./ui/tabs";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { Pencil, RectangleHorizontal, Trash2 } from "lucide-react";

const scaleBy = 1.01;

function getDistance(p1:any, p2:any) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCenter(p1:any, p2:any) {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  };
}

const Canvas = ({
  imageUrl,
}: {
  imageUrl: string;
}) => {
  const videoSource = imageUrl;
  const [image, setImage] = useState<any>();
  const imageRef = useRef<any>(null);
  const dataRef = useRef<any>(null);

  const [cordinates, setCordinates] = useState<any>({x: 0, y: 0});
  // const [rectCordinates, setRectCordinates] = useState<any>({x: 0, y: 0});
  const state = useSelector((state: RootState) => state);
  // console.log('STATE', state.Polygon.polygons)

  const [rectangles, setRectangles] = useState<any>([]);
  const [polygons, setPolygons] = useState<any>([]);
  const [newRectangle, setNewRectangle] = useState<any>([]);
  const [points, setPoints] = useState<any>([]);
  const [size, setSize] = useState<any>({});
  const [flattenedPoints, setFlattenedPoints] = useState<number[]>([]);
  const [position, setPosition] = useState([0, 0]);
  const [isMouseOverPoint, setMouseOverPoint] = useState(false);
  const [isPolyComplete, setPolyComplete] = useState(false);
  const [drawPolygon, setDrawPolygon] = useState(false);
  const [drawRectangle, setDrawRectangle] = useState(false);
  const [polygonLabelActive, setPolygonLabelActive] = useState(false);
  const [rectangleLabelActive, setRectangleLabelActive] = useState(false);
  const [editPolygonLabel, setEditPolygonLabel] = useState(false);
  const [editRectangleLabel, setEditRectangleLabel] = useState(false);


  const [polygonLabel, setPolygonLabel] = useState('');
  const [rectangleLabel, setRectangleLabel] = useState('');
  const [polygonCoordinates, setPolygonCoordinates] = useState<any>({points:[], label:"", id:""})
  const [rectangleCoordinates, setRectangleCoordinates] = useState<any>()
  const [editedPolygonLabel ,setEditedPolygonLabel] = useState<string>('');
  const [editedRectangleLabel ,setEditedRectangleLabel] = useState<string>('');


  const dispatch = useDispatch<AppDispatch>();
  const id = nanoid()


  const videoElement = useMemo(() => {
    const element = new window.Image();
    element.width = 460;
    element.height = 400;
    element.src = videoSource;
    return element;
  }, [videoSource]);

  useEffect(() => {
    const onload = function () {
      setSize({
        width: videoElement.width,
        height: videoElement.height,
      });
      setImage(videoElement);
      imageRef.current = videoElement;
    };
    videoElement.addEventListener("load", onload);
    return () => {
      videoElement.removeEventListener("load", onload);
    };
  }, [videoElement]);

  const getMousePos = (stage: any) => {
    return [stage.getPointerPosition().x, stage.getPointerPosition().y];
  };

  const handleMouseDown = (e: any) => {
    if (drawPolygon) {
      if (isPolyComplete) return;
      const stage = e.target.getStage();
      const mousePos = getMousePos(stage);
      if (isMouseOverPoint && points.length >= 3) {
        setPolyComplete(true);
        setCordinates({x: mousePos[0], y: mousePos[1]});
        setPolygonCoordinates({ points: points, id: id, label:polygonLabel }); 
        setPolygons([...polygons, { points, id, label: polygonLabel }]);       
        setPolygonLabelActive(true);
      } else {
        setPoints([...points, mousePos]);
      }
    } else if (drawRectangle) {
      const stage = e.target.getStage();
      const { x, y } = stage.getPointerPosition();
      setNewRectangle([{ x, y, width: 0, height: 0, key: "0" }]);
    }
  };

  const handleMouseMove = (e: any) => {
    if (drawPolygon) {
      const stage = e.target.getStage();
      const mousePos = getMousePos(stage);
      setPosition(mousePos);
    } else if (drawRectangle && newRectangle.length === 1) {
      const sx = newRectangle[0].x;
      const sy = newRectangle[0].y;
      const { x, y } = e.target.getStage().getPointerPosition();
      setNewRectangle([
        {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: newRectangle.length + 1,
        },
      ]);
    }
  };

  const handleMouseOverStartPoint = (e: any) => {
    if (isPolyComplete || points.length < 3) return;
    e.target.scale({ x: 3, y: 3 });
    setMouseOverPoint(true);
  };

  const handleMouseOutStartPoint = (e: any) => {
    e.target.scale({ x: 1, y: 1 });
    setMouseOverPoint(false);
  };

  let annotationToAdd:any={};

  const handleMouseUp = (e: any) => {
    if (newRectangle.length === 1 && drawRectangle) {
      const sx = newRectangle[0].x;
      const sy = newRectangle[0].y;
      const { x, y } = e.target.getStage().getPointerPosition();
      
      annotationToAdd = {
        shape: "Rectangle",
        status: "Complete",
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: rectangles.length,
        id:id,
        label:rectangleLabel
      };

      setRectangleCoordinates(annotationToAdd)

      setRectangleLabelActive(true);
      rectangles.push(annotationToAdd);
      setNewRectangle([]);
      setRectangles(rectangles);
    }
  };
  
  const handlePointDragMove = (e: any) => {
    const stage = e.target.getStage();
    const index = e.target.index - 1;
    const pos = [e.target._lastPos.x, e.target._lastPos.y];
    if (pos[0] < 0) pos[0] = 0;
    if (pos[1] < 0) pos[1] = 0;
    if (pos[0] > stage.width()) pos[0] = stage.width();
    if (pos[1] > stage.height()) pos[1] = stage.height();
    setPoints([...points.slice(0, index), pos, ...points.slice(index + 1)]);
  };

  useEffect(() => {
    setFlattenedPoints(
      points
        .concat(isPolyComplete ? [] : position)
        .reduce((a: any, b: any) => a.concat(b), [])
    );
  }, [points]);

  useEffect(() => {

  }, [polygonLabelActive])

  const undo = () => {
    setPoints(points.slice(0, -1));
    setPolyComplete(false);
  };
  const handleGroupDragEnd = (e: any) => {
    if (e.target.name() === "polygon") {
      let result: any = [];
      let copyPoints = [...points];
      copyPoints.map((point) =>
        result.push([point[0] + e.target.x(), point[1] + e.target.y()])
      );
      e.target.position({ x: 0, y: 0 });
      setPoints(result);
    }
  };
  const showCoordinates = () => {
    if (isPolyComplete) dataRef.current.style.display = "";
  };

  const rectanglesToDraw = [...newRectangle, ...rectangles];

  const stageRef = useRef<any>(null);
  let lastCenter:any = null;
  let lastDist = 0;
  
  function zoomStage(event:any) {
    event.evt.preventDefault();
    if (stageRef.current !== null) {
      const stage = stageRef.current;
      const oldScale = stage.scaleX();
      const { x: pointerX, y: pointerY } = stage.getPointerPosition();
      const mousePointTo = {
        x: (pointerX - stage.x()) / oldScale,
        y: (pointerY - stage.y()) / oldScale,
      };
      const newScale = event.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
      stage.scale({ x: newScale, y: newScale });
      const newPos = {
        x: pointerX - mousePointTo.x * newScale,
        y: pointerY - mousePointTo.y * newScale,
      }
      stage.position(newPos);
      stage.batchDraw();
    }
  }

  function handleTouch(e:any) {
    e.evt.preventDefault();
    var touch1 = e.evt.touches[0];
    var touch2 = e.evt.touches[1];
    const stage = stageRef.current;
    if (stage !== null) {
      if (touch1 && touch2) {
        if (stage.isDragging()) {
          stage.stopDrag();
        }
  
        var p1 = {
          x: touch1.clientX,
          y: touch1.clientY
        };
        var p2 = {
          x: touch2.clientX,
          y: touch2.clientY
        };
  
        if (!lastCenter) {
          lastCenter = getCenter(p1, p2);
          return;
        }
        var newCenter = getCenter(p1, p2);
  
        var dist = getDistance(p1, p2);
  
        if (!lastDist) {
          lastDist = dist;
        }
  
        // local coordinates of center point
        var pointTo = {
          x: (newCenter.x - stage.x()) / stage.scaleX(),
          y: (newCenter.y - stage.y()) / stage.scaleX()
        };
  
        var scale = stage.scaleX() * (dist / lastDist);
  
        stage.scaleX();
        stage.scaleY();
  
        // calculate new position of the stage
        var dx = newCenter.x - lastCenter.x;
        var dy = newCenter.y - lastCenter.y;
  
        var newPos = {
          x: newCenter.x - pointTo.x * scale + dx,
          y: newCenter.y - pointTo.y * scale + dy
        };
  
        stage.position(newPos);
        stage.batchDraw();
  
        lastDist = dist;
        lastCenter = newCenter;
      }
    }
  }

  function handleTouchEnd() {
    lastCenter = null;
    lastDist = 0;
  }

  const handlePolygonLabelChange = (e: any) => {
    setPolygonLabel(e.target.value);
  }

  const handleRectangleLabelChange = (e: any) => {
    setRectangleLabel(e.target.value);
  }

  const onSave = (points: any) => {
  };

  const onSavePolygonLabel = () => {
    dispatch(addPolygon({points: points, label: polygonLabel, id:id, status: 'Completed', shape: 'Polygon', flattenedPoints: flattenedPoints, labelCordinates: { x: cordinates.x, y: cordinates.y}}))
    setPolygonLabelActive(false)
    setPoints([]);
    setPolyComplete(false);
    setPolygonLabel('')
  }

  console.log("rectangleCoordinates: ",rectangleCoordinates )

  const onSaveRectangleLabel = () => {  
    dispatch(addRectangle({...rectangleCoordinates, label:rectangleLabel}));
    setRectangleLabelActive(false)
    setRectangles([]);
    setRectangleLabel('')

  }

  const handleDeletePolygon = (id: string) => {
    dispatch(deletePolygon(id))
  }

  const handleDeleteRectangle = (id: string) => {
    dispatch(removeRectangle(id))
  }

  const handleEditPolygonLabel = (e: any) => {
    setEditedPolygonLabel(e.target.value)
  }

  const handleEditRectangleLabel = (e: any) => {
    setEditedRectangleLabel(e.target.value)
  }

  const saveEditedPolygonLabel = (id: string) => {
    dispatch(editPolyLabel({ label: editedPolygonLabel, id }))
    setEditPolygonLabel(false)
  }

  const saveEditedRectangleLabel = (id: string) => {
    dispatch(editRectLabel({ label: editedRectangleLabel, id }))
    setEditRectangleLabel(false)
  }

  // console.log("Rectangles:",state.Rectangle.rectangles);
  
  return (
    <>
      <div className="flex p-5">
        <Tabs className="w-[400px] flex justify-end ">
          <TabsList className="flex flex-col">
            <TabsTrigger 
              onClick={()=>{setDrawPolygon(true) , setDrawRectangle(false)}} 
              value="polygon">
                <Image src='/polygon.png' alt='Polygon' width={20} height={20}/>
            </TabsTrigger>
            <TabsTrigger 
              onClick={() =>{ setDrawPolygon(false), setDrawRectangle(true) }}
              value="rectangle"> 
                <RectangleHorizontal/>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      <div>
        <Stage
          width={size.width || 480}
          height={size.height || 360}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onWheel={zoomStage}
          onTouchMove={handleTouch}
          onTouchEnd={handleTouchEnd}
          ref={stageRef}
        >
          <Layer>
              <KonvaImage
                ref={imageRef}
                image={image}
                x={0}
                y={0}
                width={size.width}
                height={size.height}
                alt=""
              />
              {drawPolygon && state.Polygon.polygons && 
                state.Polygon.polygons.map((polygon) => (
                <>
                <PolygonAnnotation
                  points={polygon.points}
                  flattenedPoints={polygon.flattenedPoints}
                  handlePointDragMove={handlePointDragMove}
                  handleGroupDragEnd={handleGroupDragEnd}
                  handleMouseOverStartPoint={handleMouseOverStartPoint}
                  handleMouseOutStartPoint={handleMouseOutStartPoint}
                  isFinished={polygon.status === 'Complete'}
                />
                <Label x= {polygon.labelCordinates.x - 3} y={polygon.labelCordinates.y - 15}>
                  <Tag
                      fill= 'transparent'
                      pointerDirection= 'down'
                      pointerWidth={5}
                      pointerHeight={10}
                      lineJoin= 'round'
                      shadowColor= 'black'
                      stroke="white"
                  />
                  <Text
                  text={polygon.label}
                  fontSize={15}
                  padding={5}
                  fill='white'
                  />
                </Label>
              </>
              ))}

              {drawPolygon && (

                <>
                  <PolygonAnnotation
                    points={points}
                    flattenedPoints={flattenedPoints}
                    handlePointDragMove={handlePointDragMove}
                    handleGroupDragEnd={handleGroupDragEnd}
                    handleMouseOverStartPoint={handleMouseOverStartPoint}
                    handleMouseOutStartPoint={handleMouseOutStartPoint}
                    isFinished={isPolyComplete}
                  />
                {/* <Label x= {cordinates.x - 3} y={cordinates.y - 15}>
                  <Tag
                      fill= 'transparent'
                      pointerDirection= 'down'
                      pointerWidth={5}
                      pointerHeight={10}
                      lineJoin= 'round'
                      shadowColor= 'black'
                      stroke="white"
                  />
                  <Text
                  text={polygonLabel}
                  fontSize={15}
                  padding={5}
                  fill='white'
                  />
                </Label> */}
              </>
            )}

            {drawRectangle && state.Rectangle.rectangles &&
                state.Rectangle.rectangles.map((rectangles)=>{return (
                  <>
                    <Rect
                      key={rectangles.id}
                      x={rectangles.x}
                      y={rectangles.y}
                      width={rectangles.width}
                      height={rectangles.height}
                      fill="transparent"
                      stroke="red"
                    />
                    <Label key={rectangles.id}  x={rectangles.x + 5} y={rectangles.y -5}>
                      <Tag
                        fill= 'transparent'
                        pointerDirection= 'down'
                        pointerWidth={5}
                        pointerHeight={10}
                        lineJoin= 'round'
                        shadowColor= 'black'
                        stroke="white"
                      />
                      <Text
                        text={rectangles.label}
                        fontSize={15}
                        padding={5}
                        fill='white'
                      />
                    </Label>
                  </>
                )})}

            {drawRectangle &&
              rectanglesToDraw.map((rectangle) => {
                return (
                  <>
                    <Rect
                      x={rectangle.x}
                      y={rectangle.y}
                      width={rectangle.width}
                      height={rectangle.height}
                      fill="transparent"
                      stroke="red"
                    />
                    {/* <Label key={index} x={rectangle.x + 5} y={rectangle.y -5}>
                      <Tag
                        fill= 'transparent'
                        pointerDirection= 'down'
                        pointerWidth={5}
                        pointerHeight={10}
                        lineJoin= 'round'
                        shadowColor= 'black'
                        stroke="white"
                      />
                        <Text
                          text={rectangle}
                          fontSize={15}
                          padding={5}
                          fill='white'
                        />
                    </Label> */}
                  </>
                );
              })}
            </Layer> 
          </Stage>

        <div
          ref={dataRef}
          style={{
            display: "none",
            width: 400,
            boxShadow: "7px 7px 5px .4em rgba(0,0,0,.1)",
          }}
        >
        </div>
        {(drawPolygon || drawRectangle) &&
          <Button className="mt-4 w-20" onClick={() => onSave(false)}>
            Save
          </Button>
        }
      </div>
      <div>
        <Tabs defaultValue="labels" className="w-[400px] flex flex-col justify-start border ml-5">
          <TabsList>
            <TabsTrigger value="labels" > 
              Labels
            </TabsTrigger>
          </TabsList>
          <TabsContent value="labels">
            <Card className="w-full p-5">
              <>
              {/* {polygonLabel.length ===0 && (<CardDescription>No Shape Drawn</CardDescription>)} */}

                {polygonLabelActive && (

                  <>
                    <p>Please provide a label to your shape</p>
                    <input type="text" onChange={handlePolygonLabelChange} className="h-10 border-2"/>
                    <button type="button" onClick={onSavePolygonLabel} >Save</button>
                  </>
                )}
                {
                  state.Polygon.polygons && state.Polygon.polygons.map((polygon) => {
                      return ( 
                        <div key={polygon.id} className="flex justify-between mt-4">
                          <CardTitle>
                            {editPolygonLabel && (
                              <>
                                <input type="text" defaultValue={polygon.label} onChange={(e) => handleEditPolygonLabel(e)}/>
                                <button type="button" onClick={() => saveEditedPolygonLabel(polygon.id)}>Save</button>
                              </>
                            )}
                            {!editPolygonLabel && polygon.label}
                          </CardTitle>
                          <div className="flex">
                          <button onClick={() => setEditPolygonLabel(true)} >
                          <Pencil />
                          </button>
                          <button onClick={() => handleDeletePolygon(polygon.id)} >
                            <Trash2 />
                          </button>
                          </div>
                        </div>
                      )
                  })
                }
              </>
            </Card>
            <Card className=" p-5">
              <>
                {/* {rectangleLabel.length ===0 && (<CardDescription>No Shape Drawn</CardDescription>)} */}
                {rectangleLabelActive && (
                  <>
                    <p>Please provide a label to your shape</p>
                    <input type="text" onChange={handleRectangleLabelChange} className="h-10 border-2"/>
                    <button type="button" onClick={onSaveRectangleLabel} >Save</button>
                  </>
                )}
                {
                  state.Rectangle.rectangles && state.Rectangle.rectangles.map((rectangle) => {
                    return(
                      <div key = {rectangle.id} className="flex justify-between">
                        <CardTitle>          
                          {editRectangleLabel && (
                              <>
                                <input type="text" defaultValue={rectangle.label} onChange={(e) => handleEditRectangleLabel(e)}/>
                                <button type="button" onClick={() => saveEditedRectangleLabel(rectangle.id)}>Save</button>
                              </>
                            )}
                            {!editRectangleLabel && <p>{rectangle.label}</p>}
                        </CardTitle>
                        <div className="flex">
                          <button onClick={() => setEditRectangleLabel(true)} >
                          <Pencil />
                          </button>
                          <button onClick={() => handleDeleteRectangle(rectangle.id)} >
                            <Trash2 />
                          </button>
                          </div>
                      </div>)
                  })
                }
              </>
            </Card>
          </TabsContent> 
        </Tabs>
      </div>
    </div>
    </>
  );
};

export default Canvas;