import Navbar from "../Pages/Navbar";
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;