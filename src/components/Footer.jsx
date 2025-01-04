import { useEffect, useState } from "react";
import Mano from '../img/mano.webp'
const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div>
      <footer className="bg-white rounded-t-lg shadow dark:bg-gray-900">
        <div className=" container mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#home"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={Mano}
                className="w-10"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Jean Pierre
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#home" className="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:underline me-4 md:me-6">
                  Sobre mi
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:underline me-4 md:me-6">
                  Proyectos
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {year}{" "}
            <a href="" className="hover:underline">
              JeanPierre™
            </a>
            . Todos los derechos Reservados.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
