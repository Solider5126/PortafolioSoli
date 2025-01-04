import { Typewriter } from "react-simple-typewriter";
import Foto from "../img/perfil.webp";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main
      className="text-white -z-10  min-h-screen flex flex-col md:flex-row justify-center items-center gap-0  md:gap-20 pt-16 md:pt-0"
      id="home"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      <div className="flex items-start space-y-2 flex-col font-bold rounded-lg  text-center w-80 p-5">
        <h2 className="text-blue-600 text-xl">Hola Soy</h2>
        <h2 className="text-5xl">Jean Pierre</h2>
        <div className="text-xl">
          <Typewriter
            words={[
              "Desarrollador Web",
              "Desarrollador Full Stack",
              "Creador de Contenido",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="flex gap-1">
          <p className="">Bienvenido a mi Web Personal</p>
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
            alt="👋"
            width="20"
            height={"10"}
          />
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/Solider5126">
            <FaGithub size={"30px"} />
          </a>
          <a href="https://www.linkedin.com/in/jean-pierre-gutierrez-4634a02b3/">
            <IoLogoLinkedin size={"30px"} color="skyblue" />
          </a>
        </div>
      </div>
      <div className="p-5">
        <img
          className=" rounded-full w-96 border-blue-600 border-4 shadow-[0px_0px_45px_1px_#0570eb]"
          src={Foto}
          alt="Foto de Gato"
        />
      </div>
    </main>
  );
};

export default Main;
