import React from 'react';
import Navbar from './Navbar';
import CloudScene from './ThreeScene';
const Home = () => {
    return (
        <>
        <Navbar />
        <CloudScene />
        <div className="home">
            <h1 className="FunFact">Fun Fact</h1>
        </div>
        </>
    );
};

export default Home;