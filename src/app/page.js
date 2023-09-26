"use client";
import { useRouter } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import SignInBox from "@/components/SignInBox";
import { signIn, signOut, useSession } from "next-auth/react";
const Home = () => {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }
  if (session.status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main className="bg-[#F8FAFF] h-[100vh] flex">
      <div
        className="hidden lg:block w-[50vw] h-[100vh] relative left-0 top-0 bg-gradient-to-b from-[#4285F4] to-[#286DE0]"
        style={{ clipPath: "polygon(0 0, 100% 0%, 80% 100%, 0% 100%)" }}
      >
        <div className="absolute w-69 h-29 left-20 top-14 font-poppins font-bold text-24 leading-[122.69%] tracking-[0.015em] text-white">
          LOGO
        </div>

        <div className="absolute w-246 h-88 left-44 top-1/2 font-montserrat font-bold text-6xl leading-9 text-white">
          Board.
        </div>
        <div className="flex absolute h-12 bottom-10 left-36 justify-between w-64">
          <BsGithub size="43px" color="white" />
          <AiFillTwitterCircle size="43px" color="white" />
          <AiFillLinkedin size="43px" color="white" />
          <BiLogoDiscord size="43px" color="white" />
        </div>
      </div>

      <div className="lg:hidden overflow-hidden w-full h-full relative left-0 top-0 bg-gradient-to-b from-[#4285F4] to-[#286DE0]">
        <div className="absolute w-full h-29 left-[46%] top-14 font-poppins font-bold text-24 leading-[122.69%] tracking-[0.015em] text-white">
          Logo
        </div>

        <div className="absolute w-full left-[38%] top-24 font-montserrat font-bold text-4xl leading-9 text-white">
          Board.
        </div>
        <div className="flex absolute h-12 bottom-10 left-[35%] gap-4 justify-between w-32">
          <BsGithub size="35px" color="white" />
          <AiFillTwitterCircle size="35px" color="white" />
          <AiFillLinkedin size="35px" color="white" />
          <BiLogoDiscord size="35px" color="white" />
        </div>
      </div>

      <div className="hidden lg:block w-[50vw] h-[100vh] bg-[#F8FAFF]">
        <div className="absolute right-56 top-44">
          <SignInBox />
        </div>
      </div>
      <div className="lg:hidden w-50vw min-h-screen bg-[#F8FAFF]">
        <div className="absolute top-44 left-1/2 transform -translate-x-1/2">
          <SignInBox />
        </div>
      </div>
    </main>
  );
};

export default Home;
