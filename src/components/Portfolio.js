import React from 'react';
import img1 from '../images/pumps/Picture7.png';
import img2 from '../images/pumps/Picture8.png';
import img4 from '../images/D15-Metallic-400.jpg';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>
                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">  
                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-sm">
                            <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">Pumps</h2>
                                    <p className="text-md font-medium">
                                        Versatile, Reliable Pumps for a Wide Range of Applications. Pumps the full spectrum of low-to-high viscosity fluids. Features a sealless design and horizontal disk check valves that enable the pump to handle abrasives and particulates that might damage or destroy other types of pumps. Simple, compact design reduces initial investment and lowers maintenance costs.
                                    </p>
                            </div>
                        </div>                              
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                        <div className="m-2 text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img1} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">Pressure Regulating Valves</h2>
                                    <p className="text-md font-medium">
                                    Fluid enters one side and exits the other through a valve with a spring-loaded plunger that seals a hole in the valve seat. The user can adjust the plunger force by compressing a spring. Fluid only bypasses the system when its pressure exceeds the spring pressure, ensuring a constant maximum pressure, regardless of tool size. The excess flow for smaller tools bypasses back to the sump.
                                    </p>
                                </div>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">Hydra-Cell Accessories</h2>
                                    <p className="text-md font-medium">
                                        As part of our “Mass Customization” approach, Hydra-Cell pumps are available with a variety of in-stock accessories and options to provide a pumping system ideally suited to your installation and application.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;