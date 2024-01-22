import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

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
                                    <h2 className="font-semibold my-4 text-xl text-center ">Pressure Regulating Valve </h2>
                                    <p className="text-md font-medium">
                                    Fluid enters one side and exits the other through a valve with a spring-loaded plunger that seals a hole in the valve seat. The user can adjust the plunger force by compressing a spring. Fluid only bypasses the system when its pressure exceeds the spring pressure, ensuring a constant maximum pressure, regardless of tool size. The excess flow for smaller tools bypasses back to the sump.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">High Pressure Coolant Applications </h2>
                                    <p className="text-md font-medium">
                                    High-pressure coolant, known for improving chip breakage and ejection, supports better surface finishes and extends tool life. It enables higher machining speeds and feed rates, contributing to overall efficiency.                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold">We <span className='font-black'>Build</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    With over 7 years experience in software analysis and design and a deep understanding of the latest IT trends and solutions,
                                     we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold">We <span className='font-black'>Collaborate</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We can collaborate with your existing tech team to scale existing 
                                software applications or design customized software applications that suits your everyday needs and simplifies various processes.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg> */}
                                <svg width="72" height="72" className='fill-current' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M168 88l-18.016 16.992-44.992 44.992-16.992 18.016 12.992 20.992 67.008 112 8.992 16H271.04l128 127.008c-114.336 114.912-259.84 260.8-264.992 266.016-50.144 50.112-50.304 132.288 0.96 180 50.08 49.376 131.456 50.624 179.04 0l0.96-1.024L512 691.008l198.016 198.976 2.976 2.016c50.208 47.392 130.112 47.936 177.024-2.016v-0.96h0.96c49.024-50.112 49.536-131.584-0.96-179.04l-1.024-0.96-166.976-166.016c112.32-10.464 200.32-105.376 201.984-220h0.992c0.064-0.672-0.064-1.344 0-2.016V320c3.104-37.024-4.832-72.32-24-103.008L879.04 183.04l-28 28-121.024 120.992-44.992-47.008 118.016-117.984 33.984-34.016-44-17.984A224.096 224.096 0 0 0 704 96c-123.04 0-224 100.96-224 224 0 13.408 2.848 25.056 4.992 36.992-14.016 14.08-24.544 25.504-40.992 42.016L316.992 272V176.992l-16-8.992-112-67.008-20.992-12.992zM704 160c4.544 0 7.68 2.624 12 3.008l-99.008 98.976-21.984 22.016 21.984 23.008 90.016 92.992 21.984 23.008 23.008-23.008 104-104c0.672 7.36 5.824 12.736 4.992 20.992V320c0 88.16-71.84 160-160 160-11.712 0-25.984-2.816-41.984-6.016l-17.024-2.976-12 12-360.96 361.984h-1.024v1.024c-22.784 24.864-62.528 25.44-88.992-1.024v-0.992h-1.024c-24.864-22.784-25.44-62.528 1.024-88.992 12.096-12.128 247.008-249.024 361.984-364l13.024-12.992-5.024-18.016A198.08 198.08 0 0 1 544 320c0-88.16 71.84-160 160-160z m-526.016 8l75.008 46.016v32l-6.976 6.976h-32L168 178.016l10.016-10.016z m468 388.992l199.04 198.016v0.992h0.96c24.896 22.784 25.472 62.528-0.96 88.992h-1.024v1.024c-22.784 24.864-62.528 25.44-88.992-1.024l-198.016-198.976 89.024-89.024z"  />

                                </svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold">We <span className='font-black'>Maintain</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We offer constant monitoring of our application at no extra cost. 
                                We also provide a very straight forward way of updating data within your system. This includes the most up-to-date security
                                 processes to keep your data safe. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Services;