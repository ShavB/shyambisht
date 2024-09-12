import Nav from "./Nav";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CustomButton from "../../components/Button";

export default function Home() {
  function openLink() {}

  return (
    <div className="home w-full h-screen bg-zinc-800 flex items-center justify-center">
      <div className=" w-full h-screen md:w-[60%] ">
        <div className="md:h-[85%] md:w-full h-screen md:rounded-lg md:flex md:gap-4 flex flex-col gap-4  bg-[#151515] p-8 md:mt-20">
          <div className="h-[66%] md:h-full md:w-auto md:flex grid gap-4">
            <div className="md:h-full md:w-1/2 rounded-lg rounded-t-lg bg-[#111111] flex items-center justify-center flex-col gap-4">
              <div className="h-[50%] w-[34%] md:w-[40%] bg-white rounded-full flex text-center justify-center">
                <img
                  className="rounded-full object-cover"
                  src="https://res.cloudinary.com/dvq989hma/image/upload/v1711330794/cld-sample.jpg"
                  alt=""
                />
              </div>
              <div className="text-white">Shyam Bisht</div>
            </div>
            <div className="md:w-1/2 text-white md:h-full rounded-lg bg-[#111111] text-lg p-4 flex items-center justify-center">
              Hi, I'm Shyam Bisht. A passionate Developer based in Ireland.📍
            </div>
          </div>
          <div className="h-1/3 md:h-full rounded-lg w-full col-span-2 text-white bg-[#111111] flex justify-center flex-col">
            <div className="h-1/3 flex justify-center items-center text-lg gap-4">
              <a href="https://github.com/ShavB" target="_blank">
                <FaGithub className="cursor-pointer" size={30} />
              </a>
              <a href="https://www.linkedin.com/in/shyambisht/" target="_blank">
                <FaLinkedin className="cursor-pointer" size={30} />
              </a>
              <CustomButton />
            </div>
            <div className="h-1/2 flex justify-center items-center text-lg">
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
