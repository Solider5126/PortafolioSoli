import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";

const Habilidades = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Card = ({ Img, text, color }) => (
    <div className="flex rounded-lg items-center gap-3 p-3 text-white uppercase w-44 border-2 bg-black border-yellow-400">
      <Img size={"35px"} color={color} />
      <p className="font-bold">{text}</p>
    </div>
  );
  return (
    <>
    <div className="p-10" id="habilidades"></div>
    <section className=" mt-10 p-5 space-y-3" data-aos="zoom-in-down"  data-aos-duration="3000">
      <h2 className="font-bold text-3xl text-white">Habilidades</h2>
      <span className="inline-block w-full h-px bg-white"></span>
      <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-y-4 place-items-center">
        <Card Img={FaHtml5} color="#E37D49" text={"Html"} />
        <Card Img={IoLogoCss3} color="#0fc3f0" text={"Css"} />
        <Card Img={SiPhp} color="#815d75" text={"Php"} />
        <Card Img={IoLogoJavascript} color="#fcec12" text={"Javascript"} />
        <Card Img={FaLaravel} color="#f00707" text={"Laravel"} />
        <Card Img={RiTailwindCssFill} color="#3c88ec" text={"Tailwind"} />
        <Card Img={RiReactjsFill} color="#1274f5" text={"Reactjs"} />
        <Card Img={FaGithub} color="#fcfcfc" text={"Github"} />
      </div>
    </section>
    </>
  );
};

export default Habilidades;
