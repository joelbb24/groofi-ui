import React, { useState, useEffect } from "react";
import UploadForm from "./UploadForm";

function App() {
    // Define a state variable to store the 'tempo' data
    const [tempo, setTempo] = useState(null);

    // Use the useEffect hook to make the HTTP request when the component mounts
    useEffect(() => {
        // Make an HTTP GET request to your backend to fetch the 'tempo' data
        fetch("/upload") // Replace with your actual API endpoint
            .then((response) => response.json())
            .then((data) => {
                // Update the 'tempo' state with the received data
                setTempo(data.tempo);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []); // The empty dependency array ensures the effect runs once when the component mounts

    return (
        <div className="App">
            <UploadForm />
            {tempo !== null ? (
                <p>Tempo from backend: {tempo}</p>
            ) : (
                <p>Loading tempo data...</p>
            )}
        </div>
    );
}

export default App;