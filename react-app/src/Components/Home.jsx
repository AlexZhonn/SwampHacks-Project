import React, { useState, useEffect } from 'react';
import CloudScene from './ThreeScene';
import LoadingSpinner from './LoadingSpinner';
import FunFact from './FunFacts';
import Design from './Design';
import ImageUpload from './ImageUpload';
import FunFactsTitle from './FunFactsTitle';


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
        {loading && <LoadingSpinner/>}
        <CloudScene />
        <div className="home">
            <FunFactsTitle />
            <p className="FunFact"> 
                { <FunFact />}
            </p>
            <Design />
        </div>
        <div className="block">
             Welcome to the Project!
            <div className="blockText">
                <img className="img" src="../recycling.jpg"  align="center"/>
                Snap a photo of your trash and upload it here to discover its recycling potential! Not just anything belongs in the recycling bin, but don't toss it all in the trash if you're unsure where it should go! With a simple snap and a click, you can help reduce waste in landfills, conserve energy, and minimize pollution. Each recycled item is a small yet mighty step towards a brighter, healthier world!
            </div>
            <div className="imageUpload">
                <ImageUpload />
            </div>
        </div> 
        </>
    );
};

export default Home;