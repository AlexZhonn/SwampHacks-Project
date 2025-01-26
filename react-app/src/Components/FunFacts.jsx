import React, { useState, useEffect } from 'react';
import funfacts from './funfacts.json'; // Adjust the path as needed
import '../index.css';

const FunFact = () => {
    const [funFact, setFunFact] = useState(''); // State for the full random fact
    const [displayedFact, setDisplayedFact] = useState(''); // State for the fact being typed out

    useEffect(() => {
        // Select a random fun fact
        const randomIndex = Math.floor(Math.random() * funfacts.length);
        const selectedFact = funfacts[randomIndex];
        setFunFact(selectedFact);

        // Function to create the typewriter effect
        let index = -1;
        const typingEffect = setInterval(() => {
            setDisplayedFact((prev) => {
                if (index < selectedFact.length) {
                    return prev + selectedFact[index];
                } else {
                    clearInterval(typingEffect); // Stop the typing effect when the fact is fully typed
                    return prev;
                }
            });
            index++;
        }, 50); // 100ms interval between each character

        // Cleanup interval when the component is unmounted or when the effect is finished
        return () => clearInterval(typingEffect);
    }, []);

    return (
        <div className="fun-fact-container">
            <p className="fun-fact">Fun fact:</p>
            <p className="random-fact">{displayedFact}</p>
        </div>
    );
};

export default FunFact;
