import { AiFillFilePdf } from "react-icons/ai";

const Hamburguesa = ({ openhamburguesa, open }) => {
  return (
    <div className="md:hidden">
      <div className="">
        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" onClick={openhamburguesa} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div
        className={`fixed  z-10 left-0 top-0 h-full transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-gray-800 w-48 h-full p-3 rounded-r-lg">
          <div className="flex  flex-col text-2xl space-y-14 justify-center   h-full">
            <a href="#home" className="styled-link">
              Home
            </a>
            <a href="#sobre-mi" className="styled-link">
              Sobre mi
            </a>
            <a href="#proyectos" className="styled-link">
              Proyectos
            </a>

            <a
              href="https://drive.google.com/file/d/1VjnQjAnPzrLX4515UmTxTaXoY55bcPNp/view?usp=drive_link"
              className="flex bg-gray-800 hover:text-black hover:bg-white  items-center justify-center border-4 gap-2 p-1 px-3 border-gray-800 rounded-lg "
            >
              <AiFillFilePdf size={"35px"} color="red" />
              <p>CV</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburguesa;
