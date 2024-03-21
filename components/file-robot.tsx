"use client";

import Image from "next/image";
import { useState } from "react";
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";

interface XrayImageEditor {
  imageURL: string;
}

export default function XrayImageEditor({ imageURL }: XrayImageEditor) {
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);

  const openImgEditor = () => {
    setIsImgEditorShown(true);
  };

  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };

  return (
    <div>
      <Image
        src={imageURL}
        width="500"
        height={224}
        onClick={openImgEditor}
        alt=""
        className="my-5 cursor-pointer"
      />

      {isImgEditorShown && (
        <div className="absolute top-0 left-0 right-0 z-50 w-full h-screen p-4 overflow-x-hidden md:inset-0 backdrop-blur-md backdrop-brightness-50">
          <FilerobotImageEditor
            source={imageURL}
            onSave={(editedImageObject, designState) =>
              console.log("saved", editedImageObject, designState)
            }
            onClose={closeImgEditor}
            annotationsCommon={{
              fill: "#000000",
            }}
            Text={{ text: "" }}
            Rotate={{ angle: 90, componentType: "slider" }}
            Crop={{
              presetsItems: [
                {
                  titleKey: "classicTv",
                  descriptionKey: "4:3",
                  ratio: 4 / 3,
                  // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
                },
                {
                  titleKey: "cinemascope",
                  descriptionKey: "21:9",
                  ratio: 21 / 9,
                  // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
                },
              ],
              presetsFolders: [
                {
                  titleKey: "socialMedia", // will be translated into Social Media as backend contains this translation key
                  // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                  groups: [
                    {
                      titleKey: "facebook",
                      items: [
                        {
                          titleKey: "profile",
                          width: 180,
                          height: 180,
                          descriptionKey: "fbProfileSize",
                        },
                        {
                          titleKey: "coverPhoto",
                          width: 820,
                          height: 312,
                          descriptionKey: "fbCoverPhotoSize",
                        },
                      ],
                    },
                  ],
                },
              ],
            }}
            tabsIds={[
              "Adjust",
              "Annotate",
              "Watermark",
              "Filters",
              "Finetune",
              "Resize",
            ]} // or {['Adjust', 'Annotate', 'Watermark']}
            defaultTabId={"Annotate"} // or 'Annotate'
            defaultToolId={"Text"} // or 'Text'
            savingPixelRatio={100}
            previewPixelRatio={100}
          />
        </div>
      )}
    </div>
  );
}
