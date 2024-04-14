import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HouseRes = () => {
    const houses = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const selectId = houses.find(h => h.id === intId);

    const { estate_title, segment_name, description, price, status, area, location, facilities, image_url } = selectId;

    const [added, setAdded] = useState(false);
    const handleBooking = ()=>{
        toast('your booking successfully added, we will contact with you very soon.')
        setAdded(true);
    }

    return (
        <>
            <div className='py-24 max-w-3xl mx-auto'>
                <Link className="font-bold text-3xl" to={'/'}><FaArrowLeft ></FaArrowLeft></Link>
                <div data-aos="fade-up" className="p-5 border rounded-lg shadow-xl flex flex-col hover:border-blue-400 transition duration-500 ">
                    <div data-aos="flip-right" className="relative">
                        <img src={image_url} alt="" className="object-fill w-full rounded-md h-80 dark:bg-gray-500" />
                        <div className="absolute bottom-0 right-0 bg-blue-600  text-white font-bold text-base px-3 py-2 rounded-l-md">
                            <h1>{status}</h1>
                        </div>
                    </div>
                    
                    <div data-aos="fade-down" className="mt-6 mb-2 space-y-3 flex-grow">
                        <h1 className="text-blue-600 inline-block bg-blue-300 bg-opacity-50 text-base font-semibold px-3 py-2 rounded">{segment_name}</h1>
                        <h2 className="text-2xl font-bold tracking-wide">{estate_title}</h2>
                        <p>{description}</p>
                        <h1 className="text-xl font-bold">Faciliteis : ↓</h1>
                         {
                                facilities.map((facilitie, id) => <div className="font-semibold" key={id}>
                                    <ul>
                                        <li className='text-blue-500'>{facilitie}</li>
                                    </ul>
                                </div>)
                            }
                        <p className="text-gray-600 text-xl font-bold">Location: {location}</p>

                        <div className="flex items-center justify-between font-medium">
                            <p>Price:  <span className="text-lg font-semibold text-blue-600">{price}</span></p>
                            <div className="flex items-center space-x-2">
                                <p className="flex space-x-2 items-center">
                                    Area:  <span className='text-blue-600'>{area}</span></p>
                            </div>
                        </div>
                    </div>
                    <Link onClick={handleBooking} className={"text-lg font-medium bg-blue-500 text-white px-8 py-3 rounded-lg duration-300 text-center mt-2"}><button>{added ? 'Successfully added' : 'Booking Now'}</button></Link>
                </div>
            </div>
        </>
    );
};



export default HouseRes;