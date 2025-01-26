import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      console.log("Image selected:", event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      console.log("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      console.log("Uploading image...");
      const response = await axios.post("http://127.0.0.1:5000/", formData);
      console.log("Response received:", response.data);
      setPrediction(response.data.result);
    } catch (error) {
      console.error("Error uploading the image", error);
    }
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleSubmit}>Upload</button>
      </form>
      <div>
        {prediction && <p>Predicted Class: {prediction}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;