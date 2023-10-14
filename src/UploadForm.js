
import React, {useState} from "react";

function UploadForm() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData,
        }).then(response => {response.json()})
        .then(data => {
            console.log('Tempo: ', data.tempo);
        }).catch(error => {console.error("Error: ", error)});
    };

    return (
        <div>
            <h2>Upload MP3 Files</h2>
            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <input type="file" name="file" onChange={handleFileChange} /><br /><br />
                <input type="submit" value="Upload" />
            </form>
        </div>
    );
}

export default UploadForm;