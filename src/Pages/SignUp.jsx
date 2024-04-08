import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SignUp = () => {
    let location = useLocation();
    document.title = location.pathname.slice(1);
    return (
        <div className="py-5">
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-white text-blue-600 shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-base">
                        <label htmlFor="name" className="block ">Your Name</label>
                        <input type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" />
                    </div>
                    <div className="space-y-1 text-base">
                        <label htmlFor="email" className="block ">Your Email</label>
                        <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" />
                    </div>
                    <div className="space-y-1 text-base">
                        <label htmlFor="email" className="block ">Photo URL</label>
                        <input type="text" name="photoUrl" id="photoUrl" placeholder="photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" />
                    </div>
                    <div className="space-y-1 text-base">
                        <label htmlFor="password" className="block ">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" />
                    </div>
                    <div className="space-y-1 text-base">
                        <label htmlFor="password" className="block ">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-blue-500 text-white">Sign Up</button>
                </form>
                
                <p className="text-base text-center sm:px-6">Already have an account?
                    <Link to={'/login'} className="underline">
                           Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;