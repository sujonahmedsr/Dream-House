import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/Firebase";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    let location = useLocation();
    document.title = location.pathname.slice(1);

    const [show, setShow] = useState(false)
    const [error, setError] = useState(null);
    const [errorRes,setErrorRes] = useState(null)

    const handleSignOut = (e) => {
        e.preventDefault();

        const from = new FormData(e.currentTarget);
        const name = from.get('name')
        const email = from.get('email')
        const photoUrl = from.get('photoUrl')
        const password = from.get('password')
        const confirmPassword = from.get('confirmPassword')


        if (password !== confirmPassword) {
            setError('password did not match')
            return;
        }
        else if(password < 6){
            setError('Your password should be 6 character')
            return
        }
        // else if(!(?=.*?[A-Z]).text(confirmPassword)){
        //     setError('your password should be one uppercase and one lowercase and at least one numer')
        //     return
        // }


        console.log(name, email, photoUrl, password, confirmPassword);

        createUser(email, confirmPassword)
            .then(result => {
                console.log(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl
                })
            })
        .catch(error => setErrorRes(error.message))
    }

    return (
        <div className="pt-24">
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-white text-blue-600 shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSignOut} className="space-y-6">
                    <div className="space-y-1 text-base">
                        <label htmlFor="name" className="block ">Your Name</label>
                        <input type="text" required name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" />
                    </div>
                    <div className="space-y-1 text-base">
                        <label htmlFor="email" className="block ">Your Email</label>
                        <input type="email" required name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" />
                    </div>
                    <div className="space-y-1 text-base">
                        <label htmlFor="email" className="block ">Photo URL</label>
                        <input type="text" name="photoUrl" id="photoUrl" placeholder="photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" />

                    </div>
                    <div className="space-y-1 text-base relative">
                        <label htmlFor="password" className="block ">Password</label>
                        <input type={show ? 'text' : 'password'} required name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" maxLength={8}/>
                        <span onClick={() => setShow(!show)} className="absolute top-1/2 right-5 text-xl">{show ? <FaRegEye /> : <FaEyeSlash />}</span>
                    </div>
                    
                    <div className="space-y-1 text-base relative">
                        <label htmlFor="password" className="block ">Confirm Password</label>
                        <input type={show ? 'text' : 'password'} required name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-black" maxLength={8}/>
                        <span onClick={() => setShow(!show)} className="absolute top-1/2 right-5 text-xl">{show ? <FaRegEye /> : <FaEyeSlash />}</span>
                    </div>
                    {
                        error && <div>
                            <p className="text-red-700">{error}</p>
                        </div>
                    }
                    <button className="block w-full p-3 text-center rounded-sm bg-blue-500 text-white">Sign Up</button>
                </form>
                {
                    errorRes && <div>
                        <p className="text-red-800">{errorRes}</p>
                    </div>
                }

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