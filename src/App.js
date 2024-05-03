import React from 'react';
import PasswordGenerator from './PasswordGenerator.js';
import './PasswordGenerator.css';  // Importez ici pour appliquer le style à tout l'App

function App() {
    return (
        <div className="app-container">
             <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}
            >
                <source src="matrix.mp4" type="video/mp4" />
            </video>
            <PasswordGenerator />
        </div>
    );
}

export default App;
