import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, BellDot } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/notification-popover";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-10 border shadow-sm">
      <div className="flex ">
        <Image src="logo.svg" width={162} height={48} alt="" />
        <Tabs defaultValue="patients" className="w-[425px]">
          <TabsList className="">
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>
          {/* <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent> */}
        </Tabs>
      </div>
      <div className="flex flex-row items-center">
        {/* <Link href="#"> */}
        <Popover>
          <PopoverTrigger className="relative">
            <BellDot className="mr-2" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2 absolute -right-4 top-1">
            <Button variant="link">
              <Image
                src="profile.svg"
                width={32}
                height={32}
                alt=""
                className="mr-2"
              />
              New Patient added
            </Button>
            <Button variant="link">
              <Image
                src="profile.svg"
                width={32}
                height={32}
                alt=""
                className="mr-2"
              />
              New Patient added
            </Button>
          </PopoverContent>
        </Popover>
        {/* </Link> */}
        <Button variant="link">
          <Image
            src="profile.svg"
            width={32}
            height={32}
            alt=""
            className="mr-2"
          />
          John Doe
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
