import React, { useMemo, useRef, useState, useEffect } from 'react'
import PolygonAnnotation from './PolygonAnnotation'
import { Stage, Layer, Image } from 'react-konva'
import { Button } from './ui/button'

const Canvas = ({ imageUrl, drawPolygon, onSave }: { imageUrl: string, drawPolygon: boolean, onSave: Function }) => {
  const videoSource = imageUrl
  const [image, setImage] = useState<any>()
  const imageRef = useRef<any>(null)
  const dataRef = useRef<any>(null)
  const [points, setPoints] = useState<any>([])
  const [size, setSize] = useState<any>({})
  const [flattenedPoints, setFlattenedPoints] = useState()
  const [position, setPosition] = useState([0, 0])
  const [isMouseOverPoint, setMouseOverPoint] = useState(false)
  const [isPolyComplete, setPolyComplete] = useState(false)

  const videoElement = useMemo(() => {
    const element = new window.Image()
    element.width = 480
    element.height = 360
    element.src = videoSource
    return element
  }, [videoSource]) //it may come from redux

  useEffect(() => {
    const onload = function () {
      setSize({
        width: videoElement.width,
        height: videoElement.height,
      })
      setImage(videoElement)
      imageRef.current = videoElement
    }
    videoElement.addEventListener('load', onload)
    return () => {
      videoElement.removeEventListener('load', onload)
    }
  }, [videoElement])


  const getMousePos = (stage: any) => {
    return [stage.getPointerPosition().x, stage.getPointerPosition().y]
  }
  //drawing begins when mousedown event fires.
  const handleMouseDown = (e: any) => {
    if (isPolyComplete) return
    const stage = e.target.getStage()
    const mousePos = getMousePos(stage)
    if (isMouseOverPoint && points.length >= 3) {
      setPolyComplete(true)

      // setPolyComplete to false and points to [] and then redraw polygons
    } else {
      setPoints([...points, mousePos])
    }
  }
  const handleMouseMove = (e: any) => {
    const stage = e.target.getStage()
    const mousePos = getMousePos(stage)
    setPosition(mousePos)
  }
  const handleMouseOverStartPoint = (e: any) => {
    if (isPolyComplete || points.length < 3) return
    e.target.scale({ x: 3, y: 3 })
    setMouseOverPoint(true)
  }
  const handleMouseOutStartPoint = (e: any) => {
    e.target.scale({ x: 1, y: 1 })
    setMouseOverPoint(false)
  }
  const handlePointDragMove = (e: any) => {
    const stage = e.target.getStage()
    const index = e.target.index - 1
    const pos = [e.target._lastPos.x, e.target._lastPos.y]
    if (pos[0] < 0) pos[0] = 0
    if (pos[1] < 0) pos[1] = 0
    if (pos[0] > stage.width()) pos[0] = stage.width()
    if (pos[1] > stage.height()) pos[1] = stage.height()
    setPoints([...points.slice(0, index), pos, ...points.slice(index + 1)])
  }

  useEffect(() => {
    setFlattenedPoints(
      points.concat(isPolyComplete ? [] : position).reduce((a: any, b: any) => a.concat(b), [])
    )
  }, [points])
  const undo = () => {
    setPoints(points.slice(0, -1))
    setPolyComplete(false)
  }
  const handleGroupDragEnd = (e: any) => {
    //drag end listens other children circles' drag end event
    //...that's, why 'name' attr is added, see in polygon annotation part
    if (e.target.name() === 'polygon') {
      let result: any = []
      let copyPoints = [...points]
      copyPoints.map((point) => result.push([point[0] + e.target.x(), point[1] + e.target.y()]))
      e.target.position({ x: 0, y: 0 }) //needs for mouse position otherwise when click undo you will see that mouse click position is not normal:)
      setPoints(result)
    }
  }
  const showCoordinates = () => {
    if (isPolyComplete) dataRef.current.style.display = ''
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Stage
        width={size.width || 480}
        height={size.height || 360}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
      >
        <Layer>
          <Image ref={imageRef} image={image} x={0} y={0} width={size.width} height={size.height} />
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
        </Layer>
      </Stage>
      {/* <button style={{ marginTop: 20 }} onClick={showCoordinates}>
        Coordinates
      </button>
      <button style={{ marginTop: 20 }} onClick={undo}>
        Undo
      </button> */}
      <div
        ref={dataRef}
        style={{ display: 'none', width: 400, boxShadow: '7px 7px 5px .4em rgba(0,0,0,.1)' }}
      >
        <pre>{}</pre>
      </div>
      {drawPolygon && <Button className="mt-4 w-20" onClick={() => onSave(false)}>Save</Button>}

    </div>
  )
}

export default Canvas
