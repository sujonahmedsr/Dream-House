import { useEffect, useState } from "react";
// import HouseRes from "./HouseRes";
import { Link } from "react-router-dom";
const Residential = () => {
    const [residentials, setResidential] = useState([]);
    useEffect(() => {
        fetch('/fakeDataForHouse.json')
            .then(res => res.json())
            .then(data => setResidential(data));
    }, [])
    return (
        <div className="container mx-auto py-10">
            <div className="py-10 space-y-3 text-center max-w-md mx-auto">
                <h1 className="text-3xl font-bold">Choose your home</h1>
                <p>
                    Welcome to our house, where warmth meets innovation, and every corner resonates with creativity and community.</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    residentials.map(residential => <Link data-aos="fade-up" to={`/residential/${residential.id}`} key={residential.id} className="p-5 border rounded-lg shadow-xl flex flex-col justify-between h-fit flex-grow">
                        <img src={residential.image_url} alt="" className="object-fill w-full rounded-md h-80 dark:bg-gray-500" />
                        <div className="mt-6 mb-2 space-y-3">
                            <h2 className="text-2xl font-bold tracking-wide">{residential.estate_title}</h2>
                            <h1 className="text-xl font-bold">Faciliteis : ↓</h1>
                            {
                                residential.facilities.map((facilitie, id) => <div className="font-semibold" key={id}>
                                    <ul>
                                        <li>{facilitie}</li>
                                    </ul>
                                </div>)
                            }
                            <p className="text-gray-600 text-xl font-bold">Location: {residential.location}</p>

                            <div className="flex items-center justify-between font-medium">
                                <p>Price: {residential.price}</p>
                                <div className="flex items-center space-x-2">
                                    <p className="flex space-x-2 items-center">
                                        Area: {residential.area}</p>
                                </div>
                            </div>
                        </div>
                        <Link to={`/residntial/${residential.id}`} className= {"text-lg font-medium bg-blue-500 text-white px-8 py-3 rounded-xl duration-300 text-center"}><button>View Details</button></Link>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Residential;