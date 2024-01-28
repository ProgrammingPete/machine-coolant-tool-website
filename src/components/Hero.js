import React from 'react';
import { HashLink } from 'react-router-hash-link';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/pumps/Picture2.jpg';
import heroImg2 from '../images/pumps/Picture3.jpg';

const Hero = () => {
    return (
        <>
            <div className="hero" id="start">
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto lg:flex-row item-center overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6 my-3" data-aos="zoom-in">
                    <div className="lg:flex-row justify-between py-8 item-center text-center flex flex-col-reverse lg:flex">
                        <div className=" flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                CNC Coolant Pumps
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500 lg:flex lg:mx-20 text-center">
                            Hydra-Cell™ high pressure coolant pumps, known for their reliable sealless design, eliminate issues like leaks and the need for frequent replacements. 
                            This results in increased productivity and cost savings for users, with minimal maintenance—only requiring new check valves and an oil change every 6000 hours
                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <HashLink to="/contact#top" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </HashLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={heroImg} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;