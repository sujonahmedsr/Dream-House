import { Link } from "react-router-dom";
import { FaBars, FaMinus  } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=" bg-white text-black shadow-xl z-10 px-3">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <span onClick={()=> setOpen(!open)} className="md:hidden autoHide block mr-5 cursor-pointer text-xl"> {
                            open ?  <FaMinus></FaMinus> : <FaBars></FaBars>
                        } </span>
                    </div>
                    <Link to={'/'}><h1 className="text-3xl font-bold">Dream <span className="text-blue-600">House</span></h1></Link>
                </div>
                <ul className={`md:flex md:items-center md:static absolute transition-all z-[-1] md:z-auto left-0  w-full md:w-auto  md:py-0  py-4 ${open ? 'top-16' : '-top-60'}`}>
                    <li className="text-lg font-medium hover:text-blue-500 duration-300 mx-5 my-5 md:my-0"><Link>Home</Link></li>
                    <li className="text-lg font-medium hover:text-blue-500 duration-300 mx-5 my-5 md:my-0"><Link>About Us</Link></li>
                    <li className="text-lg font-medium hover:text-blue-500 duration-300 mx-5 my-5 md:my-0"><Link>Contact</Link></li>
                </ul>
                <div className="space-x-5">
                    <Link to={'/login'} className="text-lg font-medium hover:text-blue-500 duration-300 ">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;