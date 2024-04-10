import { Link, useLocation } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { IoCheckmark } from "react-icons/io5";
import aboutUs from '../../src/assets/about-us-1-599x535.jpg'
import agent1 from '../../src/assets/agents/agents-01-540x460.jpg'
import agent2 from '../../src/assets/agents/agents-02-540x460.jpg'
import agent3 from '../../src/assets/agents/agents-03-540x460.jpg'
import agent4 from '../../src/assets/agents/agents-04-540x460.jpg'

const About = () => {
    let location = useLocation();
    document.title = `Dream House | ${location.pathname.slice(1)}`
    return (
        <div className="md:pt-20 pt-10 container mx-auto px-4">
            <div className='text-center'>
                <h1 className='text-3xl font-bold underline text-blue-600'>About Us</h1>
            </div>
            <div className='grid items-center grid-cols-1 md:grid-cols-2 gap-6 py-20'>
                <img className='rounded-xl' src={aboutUs} alt="" />
                <div className='space-y-10'>
                    <h1 className='text-4xl font-bold'>Experience since 2001</h1>
                    <p> <span className='underline text-xl text-blue-600'>Our Goal</span> We have been working since 1999 to be sure you are getting the best Dream House service possible.

                        Dream House aims to unite Dream House brokers to provide their clients and partners with the top-notch level of brokerage services throughout the USA.</p>
                    <p className='space-y-5'><span className='underline text-xl text-blue-600'>About us</span> Dream House is a full-service, luxury Dream House brokerage company representing clients worldwide.
                        <ul className='grid grid-cols-2 gap-4'>
                            <li className='flex items-center gap-2'> <IoCheckmark className='text-blue-600 text-xl'></IoCheckmark> More Listings</li>
                            <li className='flex items-center gap-2'> <IoCheckmark className='text-blue-600 text-xl'></IoCheckmark> Top Rated Agents</li>
                            <li className='flex items-center gap-2'> <IoCheckmark className='text-blue-600 text-xl'></IoCheckmark> Property for Rent and Sale</li>
                            <li className='flex items-center gap-2'> <IoCheckmark className='text-blue-600 text-xl'></IoCheckmark> Home Estimates</li>
                        </ul>
                    </p>
                    <button>
                        <Link className="text-lg font-medium bg-blue-500 text-white px-8 py-3 rounded-xl duration-300" to={'/contact'}>Get In Touch</Link>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='border p-10 rounded-lg space-y-3 hover:border-blue-600 duration-300 transition'>
                    <CiLocationOn className='text-5xl font-semibold text-blue-600'></CiLocationOn>
                    <h1 className='text-xl font-semibold'>Various Locations</h1>
                    <p className='text-gray-600'>We have lots of properties in various locations available for purchase.</p>
                </div>
                <div className='border p-10 rounded-lg space-y-3 hover:border-blue-600 duration-300 transition'>
                    <TiMessages className='text-5xl font-semibold text-blue-600'></TiMessages>
                    <h1 className='text-xl font-semibold'>No Commission</h1>
                    <p className='text-gray-600'>Opportunity to acquire a quality apartment for rent without having to pay any commission.</p>
                </div>
                <div className='border p-10 rounded-lg space-y-3 hover:border-blue-600 duration-300 transition'>
                    <CiSearch className='text-5xl font-semibold text-blue-600'></CiSearch>
                    <h1 className='text-xl font-semibold'>View Apartments</h1>
                    <p className='text-gray-600'>View apartment listings with photos, HD videos, virtual tours, 3D floor plans etc.</p>
                </div>
            </div>

            <div className='py-10'>
                <h1 className='text-2xl text-blue-600 underline'>Our Agents</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 transition-all'>
                    <div className='bg-white shadow-md hover:translate-y-4 duration-500 p-5 rounded-lg space-y-2'>
                        <img src={agent1} alt="" />
                        <h1 className='text-xl font-semibold'>Michael Rutter</h1>
                        <p>Certified Dream House Broker</p>
                    </div>
                    <div className='bg-white shadow-md hover:translate-y-4 duration-500 p-5 rounded-lg space-y-2'>
                        <img src={agent2} alt="" />
                        <h1 className='text-xl font-semibold'>Sam Wilson</h1>
                        <p>Residential Dream House Broker</p>
                    </div>
                    <div className='bg-white shadow-md hover:translate-y-4 duration-500 p-5 rounded-lg space-y-2'>
                        <img src={agent3} alt="" />
                        <h1 className='text-xl font-semibold'>Janet Richmond</h1>
                        <p>Dream House Broker</p>
                    </div>
                    <div className='bg-white shadow-md hover:translate-y-4 duration-500 p-5 rounded-lg space-y-2'>
                        <img src={agent4} alt="" />
                        <h1 className='text-xl font-semibold'>Carl Parker</h1>
                        <p>Dream House Broker</p>
                    </div>
                </div>
            </div>

            <div className='bg-blue-300 px-2 rounded-lg'>
                <div className={`py-10 max-w-md mx-auto text-center space-y-3`}>
                    <h1 className='text-3xl font-semibold'>Subscribe to Our Newsletter</h1>
                    <p>Sign up to our newsletter and be the first to know about the latest company news, special offers, events, and discounts.</p>
                    <form className='space-x-4 flex'>
                        <input className='w-full' type="email" name='email' placeholder='Your email' />
                        <button className="text-lg font-medium bg-blue-500 text-white md:px-8 px-2 py-2 rounded duration-300">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;