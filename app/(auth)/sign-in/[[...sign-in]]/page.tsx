import LoginBg from "@/public/images/login-bg.jpg"
import { SignIn } from "@clerk/nextjs"
import Image from "next/image"

const Page = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col items-center justify-center">
        <SignIn />
      </div>

      <div className="relative my-10 mr-10 flex w-full flex-1 rounded-3xl bg-white max-md:hidden">
        <Image
          src={LoginBg}
          alt="Login Background"
          className="rounded-3xl object-cover xl:object-none xl:object-top"
          placeholder="blur"
          fill
        />
      </div>
    </div>
  )
}

export default Page
