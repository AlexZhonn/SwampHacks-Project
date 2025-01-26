import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CloudScene from './ThreeScene';
import LoadingSpinner from './LoadingSpinner';
import FunFact from './FunFacts';

const Analyze = () => {
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
            <div className='Analyse-Space'>
                <h1>Analyze</h1>
                {!loading && <FunFact />}
            </div>
        </>
    );
};

export default Analyze;