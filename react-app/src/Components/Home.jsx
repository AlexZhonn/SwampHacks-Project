import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CloudScene from './ThreeScene';
import LoadingSpinner from './LoadingSpinner';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <LoadingSpinner />}
            <Navbar />
            <CloudScene />
            <div className="home">
                <h1 className="FunFact">Fun Fact</h1>
            </div>
        </>
    );
};

export default Home;