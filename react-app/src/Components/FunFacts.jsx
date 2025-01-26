import React, { useState, useEffect } from 'react';
import funfacts from './funfacts.json'; // Adjust the path as needed

const FunFact = () => {
    const [funFact, setFunFact] = useState('');

    useEffect(() => {
        // Select a random fun fact
        const randomIndex = Math.floor(Math.random() * funfacts.length);
        setFunFact(funfacts[randomIndex]);
    }, []);

    return (
        <div className="fun-fact">
            <p font-size="12px">{funFact}</p>
        </div>
    );
};

export default FunFact;

