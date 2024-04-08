import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
// import { Lock, LockKeyhole, Mail, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function SignIn() {
  async function signInAction(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch(
      `http://103.217.176.51:8000/v1/dentist_login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const json = await response.json();

    cookies().set("token", json.access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    redirect("/");
  }
  console.log(signInAction);

  return (
    <div className="flex h-[100vh] flex-row justify-center items-center bg-gradient-to-t from-white from-50% to-[#21B9C6] to-50%">
      <div className="bg-white flex flex-row w-[436px] h-[522px] justify-center items-center border-2 shadow-sm rounded-xl">
        <form
          action={signInAction}
          className="px-12 py-16 flex flex-col gap-y-1"
        >
          <div className="flex flex-row justify-evenly mb-4">
            <Image src="/denta.svg" alt="" width={100} height={20} />
            <Image src="/denta-smart.svg" alt="" width={150} height={20} />
          </div>
          <Input
            placeholder="Email Address"
            name="email"
            type="email"
            className="rounded-full focus:border-[#0085FF] focus-visible:ring-white border-2 h-12"
          />

          <Input
            placeholder="Password"
            name="password"
            type="password"
            className="rounded-full focus:border-[#0085FF] focus-visible:ring-white border-2 h-12"
          />

          <Link href="#" className="text-blue-400 font-semibold mb-5 ">
            Forgot Password?
          </Link>
          <Button
            variant="login"
            size="lg"
            className="rounded-full font-semibold"
          >
            Login
          </Button>
          <Separator className="my-5" />
          <div className=" flex justify-between">
            <Button variant="outline" className=" rounded-full">
              <Image
                src="/google.svg"
                width={20}
                height={10}
                alt=""
                className="mr-2"
              />
              Login via Google
            </Button>
            <Button className="rounded-full">
              <Image
                src="/apple.svg"
                width={20}
                height={10}
                alt=""
                className="mr-2"
              />
              Login wth Apple
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
