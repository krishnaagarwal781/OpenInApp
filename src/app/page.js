import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
export default function Home() {
  return (
    <main className="bg-white h-[100vh] flex">
      <div
        class="w-[50vw] h-[100vh] left-0 top-0 bg-gradient-to-b from-[#4285F4] to-[#286DE0]"
        style={{ clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)" }}
      >
        <div class="absolute w-69 h-29 left-[72.99px] top-[59.81px] font-poppins font-bold text-24 leading-[122.69%] tracking-[0.015em] text-white">
          LOGO
        </div>

        <div class="absolute w-246 h-88 left-[171px] top-[464px] font-montserrat font-bold text-6xl leading-9 text-white">
          Board.
        </div>
        <div className="flex absolute h-[48px] top-[909px] left-[144.5px] justify-between w-[299px]">
          <BsGithub size="44px" color="white" />
          <AiFillTwitterCircle size="45px" color="white" />
          <AiFillLinkedin size="46px" color="white" />
          <BiLogoDiscord size="46px" color="white" />
        </div>
      </div>

      <div className="w-[50vw] h-[100vh] bg-white">
        <div class="absolute w-[143.81px] h-[48.3px] left-[813.18px] top-[235.32px] font-montserrat font-bold text-4xl leading-[44px] text-black">
          Sign In
        </div>
        <div class="absolute w-[176.74px] h-[20.86px] left-[813.18px] top-[289.11px] font-lato font-normal text-base leading-[19px] text-black">Sign in to your account</div>

      </div>
    </main>
  );
}
