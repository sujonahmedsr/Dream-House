import { Link } from "react-router-dom";
import { FaBars, FaMinus } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const notify = ()=> toast('you logged out successfully')

    const handleLogOut = () => {
        logOut()
        notify()
    }
    
    return (
        <div className=" bg-white text-black shadow-xl z-10 px-3 fixed right-0 left-0">
            {/* <ToastContainer/> */}
            <nav className="container mx-auto flex items-center justify-between py-4 ">
                <div className="flex items-center justify-between">
                    <div>
                        <span onClick={() => setOpen(!open)} className="md:hidden autoHide block mr-5 cursor-pointer text-xl"> {
                            open ? <FaMinus></FaMinus> : <FaBars></FaBars>
                        } </span>
                    </div>
                    <Link to={'/'}><h1 className="md:text-3xl text-2xl font-bold">Dream <span className="text-blue-600">House</span></h1></Link>
                </div>
                <ul className={`md:flex md:items-center md:static absolute transition-all z-[-1] md:z-auto left-0  bg-white  w-full md:w-auto  md:py-0  py-4 top-16 ${open ? 'block' : 'hidden'} duration-500 md:shadow-none shadow-xl`}>
                    <li className="text-lg font-medium hover:text-blue-500 duration-300 mx-5 my-5 md:my-0"><Link to={'/'}>Home</Link></li>
                    <li className="text-lg font-medium hover:text-blue-500 duration-300 mx-5 my-5 md:my-0"><Link to={'/about'}>About Us</Link></li>
                    <li className="text-lg font-medium hover:text-blue-500 duration-300 mx-5 my-5 md:my-0"><Link to={'/contact'}>Contact</Link></li>

                    {
                        user && <li className="text-lg font-medium hover:text-blue-500 duration-300 mx-5 my-5 md:my-0"><Link to={'/update'}>Update Profile</Link></li>
                    }
                </ul>
                <div className="space-x-5">
                    {
                        user ?
                            <>
                                <button onClick={() => setOpenProfile(!openProfile)} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src={user.photoURL ? user.photoURL : '../../src/assets/noUser.png'} alt="user photo" />
                                </button>
                                <div className={`z-50 ${openProfile ? '' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-5`}>
                                    <div className="px-4 py-3 space-y-2">
                                        <p className="block text-base text-gray-900 dark:text-white font-bold">{user.displayName ? user.displayName : 'Name Not Found'}</p>
                                        <p className="block text-base  text-gray-500 truncate dark:text-gray-400">{user.email}</p>
                                        <button onClick={handleLogOut} className="text-lg font-medium hover:text-blue-500 duration-300 pt-5 text-center">LogOut</button>
                                    </div>

                                </div>
                            </>
                            :
                            <Link to={'/login'} className="text-lg font-medium bg-blue-500 text-white px-8 py-3 rounded-xl duration-300">Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;