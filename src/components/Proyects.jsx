import { useEffect } from "react";
import fotoclima from "../img/clima.webp";
import fotocripto from "../img/criptomonedas.webp";
import fotopacientes from "../img/pacientes.webp";
import { FaGithub } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import AOS from "aos";

const Proyects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Card = ({ foto, titulo, texto, tecno1, tecno2, enlace1, enlace2 }) => (
    <div className="p-5 bg-slate-900 space-y-1 rounded-lg">
      <div className="flex justify-center items-center">
        <img
          src={foto}
          className="rounded-lg h-40 md:h-64 w-full object-fill  "
          alt="Pagina Web Personal"
        />
      </div>
      <h2 className="text-center text-white font-bold text-xl">{titulo}</h2>
      <p className="text-gray-400">{texto}</p>
      <div className="flex font-bold text-xl items-center">
        <p className="text-red-600">{tecno1},</p>
        <p className="text-sky-500">{tecno2}</p>
      </div>
      <div className="flex items-center justify-end gap-4">
        <a href={enlace1}>
          <FaGithub size={"30px"} color="white" className="cursor-pointer" />
        </a>
        <a href={enlace2}>
          <FaTv size={"30px"} color="white" className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
  return (
    <>
      <div className="p-10" id="proyectos"></div>
      <section
        className="mt-10"
        id="proyectos"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="text-center mb-10">
          <h2 className="text-white font-bold text-3xl">Mis Proyectos </h2>
          <p className="text-gray-300 font-bold">
            Explora los proyectos que he trabajado
          </p>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          <Card
            foto={fotoclima}
            titulo={"Buscador de Clima"}
            texto="Una pagina web donde puedes buscar el clima de cualquier
            país colocando su ciudad viendo sus temperaturas esto es gracias a una API."
            tecno1={"ReactJs"}
            tecno2={"Tailwind"}
            enlace1={"https://github.com/Solider5126/ApiClima"}
            enlace2={"https://sparkling-treacle-e155eb.netlify.app"}
          />
          <Card
            foto={fotocripto}
            titulo={"Cotizador de Criptomonedas"}
            texto="Un sitio web donde puedes cotizar el precio de las criptomonedas ademas de ver el precio mas alto y mas bajo como el bitcoin y entre otros."
            tecno1={"ReactJs"}
            tecno2={"Tailwind"}
            enlace1={"https://github.com/Solider5126/Criptomonedas"}
            enlace2={"https://effervescent-bubblegum-de28f2.netlify.app"}
          />
          <Card
            foto={fotopacientes}
            titulo={"CRUD de Pacientes"}
            texto="En este sitio web hize un CRUD (crear,editar,eliminar) con ReactJs cuenta con validaciones y tambien con LocalStorage."
            tecno1={"ReactJs"}
            tecno2={"Tailwind"}
            enlace1={"https://github.com/Solider5126/Crud-Pacientes"}
            enlace2={"https://willowy-biscotti-5670f8.netlify.app"}
          />
        </div>
      </section>
    </>
  );
};

export default Proyects;
