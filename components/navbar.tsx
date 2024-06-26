import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BellDot, LogOut } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/notification-popover";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function Navbar() {
  async function signOut() {
    "use server";
    cookies().delete("token");
    redirect("/sign-in");
  }

  return (
    <div className="flex items-center justify-between bg-white px-10 border shadow-sm">
      <div className="flex ">
        <Link href="/" className="flex">
          <Image src="logo.svg" width={162} height={48} alt="" />
        </Link>
        <Tabs defaultValue="patients" className="w-[425px]">
          <TabsList className="">
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex flex-row items-center">
        <Popover>
          <PopoverTrigger className="relative mr-3">
            <BellDot />
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
        <div className="flex relative items-center hover:underline">
          <Image
            src="profile.svg"
            width={32}
            height={32}
            alt=""
            className="mr-2"
          />
          John Doe
        </div>
        <form action={signOut}>
          <Button variant="outline" className="text-base ml-4">
            <LogOut className="mr-2" /> Log Out
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
