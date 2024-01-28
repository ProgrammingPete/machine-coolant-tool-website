import React from 'react';
import img from '../images/applications/run-dry.jpg'; 
import img2 from '../images/applications/controlled.jpg';
import img3 from '../images/coolant.jpg';
import img4 from '../images/applications/drilling.jpg';

const Services = () => {

    return (
        <section id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Applications</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Here are some various applications and capabilities of the Hydra-Cell™ pump.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-xl text-center">Run Dry Capability</h2>
                                    <p className="text-md font-medium">
                                    Hydra-Cell™ high pressure coolant pumps are resilient to dry operation and won't get damaged if the filtration system is clogged or coolant isn't 
                                    available. Unlike conventional pumps relying on fluid for seal lubrication, Hydra-Cell pumps simplify system design by eliminating the need for level 
                                    or flow sensors. These pumps are also immune to intermittent cavitation, self-prime, and prevent costly errors by operators and maintenance personnel.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-xl text-center">Controlled Steady Flow</h2>
                                    <p className="text-md font-medium">
                                    Hydra-Cell™ high pressure coolant pumps provide precise flow rates independent of discharge pressure. Whether handling water-based emulsions or 
                                    thick cutting-oil coolants, these pumps ensure accurate flow without dynamic seals that might "leak pressure." Consistent high pressure and controlled
                                     flow facilitate effective tool blockage removal, supporting predictable tool life and work-piece quality.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">High Pressure Coolant Applications </h2>
                                    <p className="text-md font-medium">
                                    High-pressure coolant, known for improving chip breakage and ejection, supports better surface finishes and extends tool life. It enables higher machining speeds and feed rates, contributing to overall efficiency.                                    </p>
                                </div>
                            </div>              
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">Drilling Applications</h2>
                                    <p className="text-md font-medium">
                                        Deep hole drilling, or "gun drilling," is a common high-pressure coolant application. The enhanced chip breakage and ejection from high-velocity coolant reduce tool wear by preventing re-cutting chips. Improved material ejection in drilling also reduces tool deflection, enabling tighter tolerances.
                                    </p>
                                </div>
                            </div>             
                        </div>
                    </div>
            </section>
        </section>
    )
}

export default Services;