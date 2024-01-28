import React from 'react';
import mp from '../images/clients/okuma.jpg'
import chip from '../images/clients/makino.png'
import mazak from '../images/clients/Mazak_distributor-1.png'


const clientImage = {
    height: '15rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 font-bold">Manufacturers who use Hydra-Cell Pumps</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                                            </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={mp} alt="client" />                           
                        </div>

                         <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={chip} alt="client" />                            
                        </div> 
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                    <img src={mazak} alt="client" />                            
                        </div>                                
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;