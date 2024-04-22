"use client"

import Canvas from "@/components/Canvas";
import ReduxProvider from "@/redux/provider";

const ImgTool = () => {
  return (
    <div >
      <div className="border p-5 ml-5">
        <ReduxProvider>
          <Canvas 
            imageUrl="./sampleImage.jpg"
          />
        </ReduxProvider>
      </div>
    </div>
  

  )
}
export default ImgTool;
