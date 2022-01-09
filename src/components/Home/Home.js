import React from 'react';

import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Pricing from '../Pricing/Pricing';
import Testimonials from '../Testimonials/Testimonials';
import FAQ from '../FAQ/FAQ';

import './Home.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
