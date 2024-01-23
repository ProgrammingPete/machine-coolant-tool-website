import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Portfolio />
            {/* <Clients /> TODO: Change to Top MAchine top machine tool coolant manufacturers such as 
                        MP Systems
                        LNS chip blaster 
                        Mazak */}
            <Cta/>
            <Footer />
        </>
    )
}

export default Home;

