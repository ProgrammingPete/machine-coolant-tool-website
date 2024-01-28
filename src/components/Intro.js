import React from 'react';
import img from '../images/H25-Non-metallic.jpg';
import { HashLink } from 'react-router-hash-link';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold">Why Hydra-Cell? </h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    Conventional coolant pumps often require fine filtration as low as 25 microns, risking the removal of performance-enhancing additives and incurring high filtration costs. Hydra-Cell™ pumps, protected with a 40 mesh (400 micron) screen, allow flexibility in filtration based on system needs. This reduces filter changes, operating costs, and disposal expenses, enabling focus on machine efficiency.
                                </p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    Hydra-Cell™ high pressure coolant pumps, with their sealless design, are crucial for modern high-pressure coolant pump systems. They enhance CNC machining applications like boring, drilling, EDM, grinding, milling, and chip removal. Operating at pressures from 30 to 2500 PSI, these pumps outperform others by avoiding leaks and offering rugged construction, versatility, and unmatched performance.
                                </p>
                            </div>
                            <HashLink to="/contact#top" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </HashLink>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;