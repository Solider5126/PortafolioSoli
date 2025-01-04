import { useEffect } from "react";
import Foto from "../img/perfil.webp";
import AOS from "aos";

const Mi = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="mt-0  md:-mt-40 pb-10 md:pb-40" id="sobre-mi"></div>
      <div
        className="bg-gray-900 p-5 rounded-lg space-y-3 "
        data-aos="zoom-in-right"
        data-aos-duration="3000"
      >
        <h2 className="text-white font-bold text-3xl ">Sobre mi</h2>
        <span className="inline-block w-full h-px bg-white"></span>
        <div className="grid lg:grid-cols-2 space-y-3">
          <div className="flex justify-center">
            <img className=" rounded-full w-96" src={Foto} alt="Foto de Gato" />
          </div>
          <div className="flex flex-col justify-center space-y-7 text-xl text-white">
            <p className="">
              Soy un egresado de la carrera de Desarrollo de Software. Me gusta
              aprender y adaptarme al trabajo que estoy ejerciendo, también me
              considero una persona responsable, atenta y siempre tratando de
              mejorar cada día.
            </p>
            <p>
              He trabajado en varios proyectos interesantes, como la creación de
              una API de geolocalización con Google Maps y el desarrollo de
              interfaces de usuario responsivas utilizando React y Tailwind CSS.
              Puedes ver algunos de mis proyectos en GitHub.
            </p>
            <p>
              Siempre estoy buscando aprender nuevas tecnologías y mejorar mis
              habilidades. Comunidad: Participo activamente en comunidades de
              desarrolladores y eventos de hackathons.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mi;
