// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdTime } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import swiper1 from '../../src/assets/swiper/brian-babb-XbwHrt87mQ0-unsplash.jpg'
import swiper2 from '../../src/assets/swiper/chuttersnap-jp9JczGYMnY-unsplash.jpg'
import swiper3 from '../../src/assets/swiper/kenny-eliason-mGZX2MOPR-s-unsplash.jpg'
import swiper4 from '../../src/assets/swiper/scott-webb-1ddol8rgUH8-unsplash.jpg'


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Residential from '../components/Residential/Residential';

export default function App() {
    return (
        <div>
            <Swiper
                loop={true}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero">
                        <img className='h-[95vh] w-full object-cover object-center' src={swiper1} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div data-aos="fade-right" className="max-w-md">
                                <h1 className="mb-5 text-3xl font-bold">Special Unveiling of 568 N. Tigertail Road</h1>
                                <p className="mb-5">Our Principal and Partner, Samuel McMillan, recently celebrated the unveiling of 568 N. Tigertail Road, a newly-constructed estate</p>
                                <div className='flex items-center gap-2 mx-auto'>
                                    <IoMdTime></IoMdTime>
                                    <p>MARCH 15, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero">
                        <img className='h-[95vh] w-full object-cover object-center' src={swiper2} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div data-aos="fade-right" className="max-w-md">
                                <h1 className="mb-5 text-3xl font-bold">Turks and Caicos Villa to be Sold for Record $7.6M</h1>
                                <p className="mb-5">The Agency is pleased to announce the sale of 24 Cherokee Road for $7.625 million—the highest-priced residential sale in Turks and</p>
                                <div className='flex items-center gap-2 mx-auto'>
                                    <IoMdTime></IoMdTime>
                                    <p>APRIL 15, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero">
                        <img className='h-[95vh] w-full object-cover object-center' src={swiper4} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div data-aos="fade-right" className="max-w-md">
                                <h1 className="mb-5 text-3xl font-bold">How We Build a Better LA for Fifth Year in a Row</h1>
                                <p className="mb-5">Last week, we partnered with Habitat for Humanity of Greater Los Angeles (Habitat LA) for the fifth year in a row for a build day</p>
                                <div className='flex items-center gap-2 mx-auto'>
                                    <IoMdTime></IoMdTime>
                                    <p>MARCH 15, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero">
                        <img className='h-[95vh] w-full object-cover object-center' src={swiper3} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div data-aos="fade-right" className="max-w-md">
                                <h1 className="mb-5 text-3xl font-bold">Special Unveiling of 568 N. Tigertail Road</h1>
                                <p className="mb-5">Our Principal and Partner, Samuel McMillan, recently celebrated the unveiling of 568 N. Tigertail Road, a newly-constructed estate</p>
                                <div className='flex items-center gap-2 mx-auto'>
                                    <IoMdTime></IoMdTime>
                                    <p>MARCH 15, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Residential></Residential>
        </div>
    );
}