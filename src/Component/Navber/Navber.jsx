import { NavLink } from "react-router-dom";
import './style.css'

const Navber = () => {


    const navlink = <>

        <NavLink className={'text-xl font-medium px-5 py-2 mr-2 hover:bg-slate-300 rounded-xl'} to={'/'}>Home</NavLink>
        <NavLink className={'text-xl font-medium px-5 py-2 mr-2 hover:bg-slate-300 rounded-xl'} to={'/about'}>About</NavLink>
        <NavLink className={'text-xl font-medium px-5 py-2 mr-2 hover:bg-slate-300 rounded-xl'} to={'/detail'}>Detail</NavLink>
        <NavLink className={'text-xl font-medium px-5 py-2 mr-2 hover:bg-slate-300 rounded-xl'} to={'/apply'}>Apply Job</NavLink>
        <NavLink className={'text-xl font-medium px-5 py-2 mr-2 hover:bg-slate-300 rounded-xl'} to={'/contact'}>Contact</NavLink>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <div className="text-xl md:text-3xl font-bold ">House cafe</div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-12" src="https://i.ibb.co/MkS6J2x/removal-ai-5f7861b9-e672-475d-bf88-da3ad77bb080-1111.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navber;