import React, { useState } from 'react';
import './Detection.css';

const Detection = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [results, setResults] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    setUploadedImage(file);
  };

  const handleManualUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleDetect = async () => {
    if (uploadedImage) {
      const formData = new FormData();
      formData.append('file', uploadedImage);

      try {
        const response = await fetch('http://localhost:5000/detection', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          setResults(`Detection: ${result.class}, Confidence: ${result.confidence}`);
        } else {
          setResults('Error processing image. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        setResults('Error processing image. Please try again.');
      }
    }
  };

  const handleReupload = () => {
    setUploadedImage(null);
    setResults('');
  };

  return (
    <div className="detection-container">
      <h2>Parkinson Detection Using MRI Images</h2>

      <div
        className={`drop-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleFileDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input"
          id="fileInput"
        />
        <p>{isDragging ? 'Drop the image here' : 'Drag and drop image or click to upload'}</p>
        <button className="manual-upload-button" onClick={handleManualUpload}>
          Manual Upload
        </button>
      </div>

      {uploadedImage && (
        <div className="image-preview">
          <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" width="640" height="480" />
        </div>
      )}

      <div className="button-group">
        {uploadedImage && (
          <>
            <button className="detect-button" onClick={handleDetect}>
              Detect
            </button>
            <button className="reupload-button" onClick={handleReupload}>
              Reupload
            </button>
          </>
        )}
      </div>

      {results && (
        <div className="results-section">
          <h3>Results:</h3>
          <p>{results}</p>
        </div>
      )}
    </div>
  );
};

export default Detection;
