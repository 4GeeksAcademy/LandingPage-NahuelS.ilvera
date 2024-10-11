import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import CardSection from './cardSection';
import Footer from './footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <CardSection />
            <Footer />
        </div>
    );
};

export default Home;
