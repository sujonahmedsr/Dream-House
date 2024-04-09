import { updateProfile } from 'firebase/auth';
import profile from '../../src/assets/profile.png'
import { useLocation } from 'react-router-dom';
import auth from '../firebase/Firebase';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const UpdateProfile = () => {
    let location = useLocation();
    document.title = `Dream House | ${location.pathname.slice(1)}`

    const notify = ()=> toast('Your profile update successfully')

    const {user} = useContext(AuthContext);
    const userName = user.displayName;

    const handleUpdateProfile = (e)=>{
        e.preventDefault()
        const from = new FormData(e.currentTarget)
        const name = from.get('name');
        const photo = from.get('photo')
        
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        } ,
        notify()
    )
    }
    
    return (
        <div className="pt-20 container mx-auto">
            <div className="grid max-w-6xl items-center grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x p-10">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Update Your Profile</h1>
                    <p className="pt-2 pb-4">You can update your name or profile picture</p>
                    <img className='md:w-3/4' src={profile} />
                </div>
                <form onSubmit={handleUpdateProfile} className="flex flex-col py-6 space-y-6 p-3 md:p-10 md:px-6 shadow-xl rounded-lg max-w-md">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" name='name' defaultValue={userName} placeholder="Your full name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 px-4 py-3" required/>
                    </label>
                    <label className="block">
                        <span className="mb-1">Photo Url</span>
                        <input type="text" name='photo' placeholder="photo Url" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 px-4 py-3" required/>
                    </label>

                    <input className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-blue-600 text-white w-full" type="submit" value="Update Profile"/>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;