import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [prediction, setPrediction] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);  // Ensure the key here matches the key expected on the server-side

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/predict/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // Ensure correct headers are set
                }
            });
            setPrediction(response.data.predicted_class);  // Adjust key based on server response
        } catch (error) {
            console.error("There was an error uploading the file!", error);
        }
    };

    return (
        <div>
            <div>Upload an Image</div>
            <form onSubmit={handleSubmit}>
                <input className="upload" type="file" onChange={handleFileChange} accept="image/*" title = " " required />
                <button className="classify"type="submit">Classify</button>
            </form>

            {prediction && <div className= "prediction">Predicted Class: {prediction}</div>}
            {prediction === 'Battery' && <div className= "statement">Handle batteries with care! Recycle them at designated e-waste recycling centers.</div>}
            {prediction === 'Biological' && <div className= "statement">Biological waste detected! Dispose of it in biohazard bins to ensure safety.</div>}
            {prediction === 'Clothes' && <div className= "statement">Recycle old clothes! Donate them to charity or use textile recycling programs.</div>}
            {prediction === 'Metal' && <div className= "statement">Recycle metal items! Take them to your local recycling center to reduce waste.</div>}
            {prediction === 'Shoes' && <div className= "statement">Repair or repurpose old shoes! Consider donating them if they are in good condition.</div>}
            {prediction === 'Paper' && <div className= "statement">Recycle paper products! Use your local curbside recycling program or paper recycling bins.</div>}
            {prediction === 'Trash' && <div className= "statement">This is general waste! Dispose of it properly in the trash bin, but consider reducing waste whenever possible.</div>}
            {prediction === 'Glass' && <div className= "statement">Recycle glass containers! Rinse them out and place them in the glass recycling bin.</div>}
            {prediction === 'Cardboard' && <div className= "statement">Flatten and recycle cardboard! Use your local recycling program to turn it into new products.</div>}
            {prediction === 'Plastic' && <div className= "statement">Recycle plastic materials! Check local guidelines to see which types can be recycled in your area.</div>}
         </div>
    );
}

export default FileUpload;