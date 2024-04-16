
import React, { useMemo, useRef, useState, useEffect } from "react";
import PolygonAnnotation from "./PolygonAnnotation";
import { Stage, Layer, Image, Rect, Line } from "react-konva";
import { Button } from "./ui/button";
import ReduxProvider from "@/redux/provider";
import { addPolygon } from "@/redux/features/polygon-slice";
import { addRectangle } from "@/redux/features/rectangle-slice";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

const Canvas = ({
  imageUrl,
  drawPolygon,
  onSave,
  drawRect,
}: {
  imageUrl: string;
  drawPolygon: boolean;
  drawRect: boolean;
  onSave: Function;
}) => {
  const videoSource = imageUrl;
  const [image, setImage] = useState<any>();
  const imageRef = useRef<any>(null);
  const dataRef = useRef<any>(null);

  const [annotations, setAnnotations] = useState<any>([]);
  const [newAnnotation, setNewAnnotation] = useState<any>([]);
  const [points, setPoints] = useState<any>([]);
  const [size, setSize] = useState<any>({});
  const [flattenedPoints, setFlattenedPoints] = useState();
  const [position, setPosition] = useState([0, 0]);
  const [isMouseOverPoint, setMouseOverPoint] = useState(false);
  const [isPolyComplete, setPolyComplete] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const newPoints = useSelector((state:RootState)=> state.PolygonChange.value.points )


  const videoElement = useMemo(() => {
    const element = new window.Image();
    element.width = 480;
    element.height = 360;
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
        console.log(points);
        dispatch(addPolygon(points))
        // points to save inside zustand/ redux (dispatch action) state,
        // { status: completed, points, shape: 'polygon' }
      } else {
        setPoints([...points, mousePos]);
        // points to save inside zustand/ redux (dispatch action) state,
        // { status: in-progress, points, shape: 'polygon' }
      }
    } else if (drawRect) {
      const stage = e.target.getStage();
      const { x, y } = stage.getPointerPosition();
      setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
    }
  };

  const handleMouseMove = (e: any) => {
    if (drawPolygon) {
      const stage = e.target.getStage();
      const mousePos = getMousePos(stage);
      setPosition(mousePos);
    } else if (drawRect && newAnnotation.length === 1) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = e.target.getStage().getPointerPosition();
      setNewAnnotation([
        {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: "0",
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

  const handleMouseUp = (e: any) => {
    if (newAnnotation.length === 1 && drawRect) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = e.target.getStage().getPointerPosition();
      const annotationToAdd = {
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: annotations.length + 1,
      };

      console.log(annotationToAdd);

      // state to save inside zustand, redux (dispatch action)
      // {
      //   shape: 'rectangle'
      //   status: completed
      //   x: sx,
      //   y: sy,
      //   width: x - sx,
      //   height: y - sy,
      //   key: annotations.length + 1
      // };
      dispatch(addRectangle(annotationToAdd));
      annotations.push(annotationToAdd);
      setNewAnnotation([]);
      setAnnotations(annotations);
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

  const annotationsToDraw = [...newAnnotation, ...annotations];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stage
        width={size.width || 480}
        height={size.height || 360}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          <Image
            ref={imageRef}
            image={image}
            x={0}
            y={0}
            width={size.width}
            height={size.height}
            alt=""
          />
          {drawPolygon && (
            <PolygonAnnotation
              points={points}
              flattenedPoints={flattenedPoints}
              handlePointDragMove={handlePointDragMove}
              handleGroupDragEnd={handleGroupDragEnd}
              handleMouseOverStartPoint={handleMouseOverStartPoint}
              handleMouseOutStartPoint={handleMouseOutStartPoint}
              isFinished={isPolyComplete}
            />
          )}

          {drawRect &&
            annotationsToDraw.map((annotationValue, index) => {
              return (
                <Rect
                  key={index}
                  x={annotationValue.x}
                  y={annotationValue.y}
                  width={annotationValue.width}
                  height={annotationValue.height}
                  fill="transparent"
                  stroke="red"
                />
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
        <pre>{}</pre>
      </div>
      {(drawPolygon || drawRect) && (
        <Button className="mt-4 w-20" onClick={() => onSave(false)}>
          Save
        </Button>
      )}
    </div>
  );
};

export default Canvas;

