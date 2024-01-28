import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { ScrollToTop } from '../components/ScrollToTop';
import { API } from 'aws-amplify';
import { createInquiry } from '../graphql/mutations.ts';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('CNC Coolant Pumps - Send us a message')
    ScrollToTop();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [company, setCompany] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [description, setDescription] = useState('')

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setCompany('')
        setAddress('')
        setEmail('')
        setPhone('')
        setDescription('')
    }

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        const name = firstName + " " + lastName;
        if(firstName && lastName && email && description && phone && address && company) {
            console.log("Calling graphql function");
            API.graphql({
                query: createInquiry,
                variables: {
                  input: {
                    name,
                    email,
                    company,
                    address,
                    description,
                    phone
                  },
                },
              }).then( 
                (response) => {
                    console.log(response);
                    document.getElementById('submitBtn').disabled = false;
                    document.getElementById('submitBtn').innerHTML = 'send message';
                    clearInput()
                    //handle success
                    Notiflix.Report.success(
                        'Success',
                        "Success",
                        'Okay',
                    );
              }, 
              (error) => {
                    console.log(error);
                    document.getElementById('submitBtn').disabled = false;
                    document.getElementById('submitBtn').innerHTML = 'send message';
                    //handle error
                    Notiflix.Report.failure(
                        'An error occurred',
                        'An error occurred',
                        'Okay',
                    );
                });
        } else {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            Notiflix.Report.info(
                'Information',
                'Please Enter All Required Fields',
                'Okay',
            );
        }
    }
    return (
        <>
            <div id="start">
                <NavBar />
            </div>
            <section className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200" >
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in" >

                <form onSubmit={sendEmail}>

                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input 
                                        name="first_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="First Name*" 
                                        value={firstName}
                                        onChange={(e)=> setFirstName(e.target.value)}
                                    />
                                </div>
                                
                                <div>
                                    <input 
                                        name="last_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e)=> setLastName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <input 
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" 
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <input
                                        name="company" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Company Name*"
                                        value={company}
                                        onChange={(e)=> setCompany(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        name="address" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Address*"
                                        value={address}
                                        onChange={(e)=> setAddress(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        name="phone_number" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number" 
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e)=> setPhone(e.target.value)}
                                    />
                                </div>
                        </div>
                        <div className="my-4">
                            <textarea 
                                name="description" 
                                placeholder="Product or Application of interest*" 
                                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                value={description}
                                onChange={(e)=> setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="my-2 w-1/2 lg:w-2/4">
                            <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                </div>
                </form>
                </div>
            </section>
            <Footer />
        </>


    )
}

export default Contact;