import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";





const Home = () => {
    
    return (
        <div className="">
            <div className="mx-auto md:w-[70%] w-full px-5 py-5 md:px-0">
                <Navber></Navber>
                <Outlet></Outlet>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                </div>
            </div>
            <div className="bg-sky-200">
                <div className="mx-auto md:w-[70%] md:pl-10 lg:pl-0">
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default Home;