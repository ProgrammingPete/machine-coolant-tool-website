import React from 'react';
import img1 from '../images/pumps/Picture7.png';
import img2 from '../images/pumps/Picture8.png';
import img3 from '../images/pumps/metering-accessories-options-1.jpg';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                        <div className="m-2 text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img1} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">Pressure Regulating Valve </h2>
                                    <p className="text-md font-medium">
                                    Fluid enters one side and exits the other through a valve with a spring-loaded plunger that seals a hole in the valve seat. The user can adjust the plunger force by compressing a spring. Fluid only bypasses the system when its pressure exceeds the spring pressure, ensuring a constant maximum pressure, regardless of tool size. The excess flow for smaller tools bypasses back to the sump.
                                    </p>
                                </div>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">Hyrdra-Cell Accessories</h2>
                                    <p className="text-md font-medium">
                                    As part of our “Mass Customization” approach, Hydra-Cell pumps are available with a variety of in-stock accessories and options to provide a pumping system ideally suited to your installation and application.                                    </p>
                                </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">Metering Accessories</h2>
                                    <p className="text-md font-medium">
                                    Hydra-Cell metering pumps are just one facet of a complete Hydra-Cell “Metering Solutions” system.We can furnish all components in your pumping system, individually tailored to your specific processing needs.                
                                    </p>
                                </div>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-10 h-12">Data-Driven Applications</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    One of our most renown data-driven applications was for our Amazon client, which enabled them to efficiently use data generated 
                                    at warehouses. This data was then used to determine the efficiency of workers in a warehouse and quickly notify the regional 
                                    manager of the warehouse of any loss of headcount. We also included other metrics such as throughput and fullfilment of packages. 
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