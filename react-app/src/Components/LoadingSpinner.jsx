import React from 'react';
import './LoadingSpinner.css';
import recycleImage from './recycle-symbol.png'; // Adjust the path as needed

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <img src={recycleImage} alt="Loading..." className="loading-spinner" />
        </div>
    );
};

export default LoadingSpinner;