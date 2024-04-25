import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { ChatDialog, ChatDialogTrigger, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/chat-dialog"
import AiChatResponse from "./aiChatResponse"
import PatientChatResponse from "./patientChatResponse"

export const Chats = ({chats} : {chats: []}) => {
    return (
        <ChatDialog>
              <ChatDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex justify-between bg-white py-7 px-5 rounded-xl border-none"
                >
                  <h1 className="text-2xl">Chat</h1>
                  <ArrowRight className="text-[#21B9C6]" size={30} />
                </Button>
              </ChatDialogTrigger>
                <DialogContent className="bg-[#EBF1F8] lg:max-w-screen-lg overflow-y-auto max-h-screen">
                  <DialogHeader>
                    <DialogTitle className="flex items-center mx-auto  text-4xl mb-3 ">
                      Ai Smart Dentist
                    </DialogTitle>
                    <DialogDescription className="flex flex-col bg-[#EBF1F8] gap-1 ">
                        {chats ? chats.map((chat:any, index:any)=>{
                          return(
                            <div key={index}>
                              {chat.role === "assistant" && 
                                <AiChatResponse
                                  comment={chat.body}
                                /> 
                              }
                              {chat.role === "user" && 
                                <PatientChatResponse
                                  comment={chat.body}
                                /> 
                              }
                            </div>
                          )
                        }) : (
                          <p>No chats found</p>
                        )}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
            </ChatDialog>
    )
}