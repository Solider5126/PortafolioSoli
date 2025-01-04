import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Mi from "./components/Mi";
import Habilidades from "./components/Habilidades";
import Proyects from "./components/Proyects";
import { IoLogoWhatsapp } from "react-icons/io";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className=" min-h-screen items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
        <Header />
        <div className="container mx-auto pb-10">
          <div className="relative z-10">
            <div className="fixed right-0 bottom-0">
              <div className="flex flex-col items-center  py-2 md:py-5 md:px-2 ">
                <a href="https://wa.me/51926153463" className="bg-white rounded-full p-2  ">
                  <IoLogoWhatsapp
                    color="green"
                    className=" md:text-[65px] text-[50px] "
                  />
                </a>
              </div>
            </div>
          </div>
          <Main />
          <Mi />
          <Habilidades />
          <Proyects />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
