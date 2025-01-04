import { useState, useEffect } from "react";
import Hamburguesa from "./Hamburguesa";
import { AiFillFilePdf } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const openhamburguesa = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-white transition-colors duration-300 text-xl font-bold p-5 ${
        scrolling ? "bg-gray-900" : "bg-transparent"
      } w-full fixed rounded-b-lg z-10`}
    >
      <div className="container mx-auto">
        <div className="md:hidden justify-between flex">
          <a href="#" className="">
            Jean Pierre
          </a>
          <Hamburguesa openhamburguesa={openhamburguesa} open={open} />
        </div>

        <nav className="flex justify-between items-center">
          <a href="#home" className="hidden md:flex">
            Jean Pierre
          </a>
          <div className="md:flex gap-5 hidden">
            <a href="#home" className="styled-link">
              Home
            </a>
            <a href="#sobre-mi" className="styled-link">
              Sobre mi
            </a>
            <a href="#proyectos" className="styled-link">
              Proyectos
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1VjnQjAnPzrLX4515UmTxTaXoY55bcPNp/view?usp=drive_link"
            className="md:flex hidden bg-gray-90 hover:bg-white hover:text-black items-center border-2 gap-2 p-1 px-3 border-gray-900 hover:border-white rounded-lg "
          >
            <AiFillFilePdf size={"35px"} color="red" />
            <p>CV</p>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
