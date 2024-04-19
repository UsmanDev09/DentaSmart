"use client"

import Canvas from "@/components/Canvas";
import ReduxProvider from "@/redux/provider";
// import { Card, CardDescription, CardTitle } from "@/components/ui/card";
// import { Tabs,TabsList,TabsTrigger } from "@/components/ui/tabs";

// import { TabsContent } from "@radix-ui/react-tabs";
// import { RectangleHorizontal } from "lucide-react";
// import { useState } from 'react'
// import { UseDispatch, useDispatch } from "react-redux";
// import { addPolygon } from "@/redux/features/polygon-slice";



const ImgTool = () => {
  // const [drawPolygon, setDrawPolygon] = useState(false);
  // const [drawRectangle, setDrawRectangle] = useState(false);
  // const [polyLabel, setPolyLabel] = useState("");
  // const [rectLabel, setRectLabel] = useState("");
  // const [labelActive, setLabelActive] = useState(false);
  // const [label, setLabel] = useState('');
  // const [polygonCoordinates, setPolygonCoordinates] = useState<any>({points:[], label:"", id:""})


  // const handleLabelChange = (e: any) => {
  //   console.log("handleLabelChange", e.target.value);
  //   setLabel(e.target.value);
  //   console.log(e.target.value)


  // }

  // const onSaveLabel = () => {
  //     setLabel(label)
  //     setPolygonCoordinates({...polygonCoordinates,label:label })

  //     // dispatch(addPolygon(polygonCoordinates))

  //     setLabelActive(false)
  //   }


  return (
    <div >
      {/* {/* <Tabs className="w-[400px] flex justify-end ">
        <TabsList className="flex flex-col">
          <TabsTrigger 
            onClick={()=>{setDrawPolygon(true) , setDrawRectangle(false)}} 
            value="polygon">
              {/* <FontAwesomeIcon icon={"vector-polygon"} /> */}
              {/* polygon */}
          {/* </TabsTrigger>
          <TabsTrigger 
            onClick={() =>{setDrawPolygon(false), setDrawRectangle(true);}}
            value="recatngle"> 
              <RectangleHorizontal/> */}
          {/* </TabsTrigger> */}
        {/* // </TabsList> */}
      {/* // </Tabs> */}
      <div className="border p-5 ml-5">
        <ReduxProvider>
          <Canvas 
            imageUrl="./sampleImage.jpg"
          />
        </ReduxProvider>
      </div>
      {/* <div>
      <Tabs defaultValue="labels" className="w-[400px] flex flex-col justify-start items-start border ml-5">
        <TabsList >
          <TabsTrigger value="labels"> 
            Labels
          </TabsTrigger>
        </TabsList>
        <TabsContent value="labels">
          <Card className=" p-5">
              <>
                {labelActive && (
                  <>
                    <input type="text" onChange={handleLabelChange} />
                    <button type="button" onClick={onSaveLabel} >Save</button>
                  </>
                )}
                <CardTitle>Polygon</CardTitle>
                <CardDescription><p>{!label ?(<>No Label</>):(<>{label}</>) }</p></CardDescription>
              </>
          </Card>
        </TabsContent> 
      </Tabs>
    </div>*/}
    </div>
  

  )
}
export default ImgTool;
