import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/Firebase";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    let location = useLocation();
    document.title =  `Dream House | ${location.pathname.slice(1)}`;


    const [error, setError] = useState(null);

    const { signInUser } = useContext(AuthContext);

    const notify = ()=> toast('you sign up successfully')
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');

        signInUser(email, password)
            .then(res => {
                notify()
                console.log(res.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => setError(error))
    }


    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user);
                notify();
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => setError(error))
    }


    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                console.log(res.user);
                notify()
                navigate('/')
            })
            .catch(error => console.log(error));
    }

    const [show, setShow] = useState(null);

    return (
        <div className="pt-24">
            <div className="max-w-md mx-auto p-8 space-y-3 rounded-xl bg-white text-blue-600 shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSignIn} className="space-y-6">
                    <div className="space-y-1 text-base">
                        <label htmlFor="email" className="block ">Your Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" required/>
                    </div>
                    <div className="space-y-1 text-base ">
                        <label htmlFor="password" className="block ">Password</label>
                        <div className="relative">
                            <input type={show ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" required />
                            <span onClick={() => setShow(!show)} className="absolute top-4 right-5 text-xl">{show ? <FaRegEye /> : <FaEyeSlash />}</span>
                        </div>
                        <div className="flex justify-end text-base ">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    {
                        error && <div>
                            <p className="text-red-700">Invalid Your Email or Password</p>
                        </div>
                    }
                    <button className="block w-full p-3 text-center rounded-sm bg-blue-500 text-white">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm ">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={signInWithGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>

                    <button onClick={signInWithGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-base text-center sm:px-6">Dont have an account?
                    <Link to={'/signUp'} className="underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
