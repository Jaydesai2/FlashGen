import React, { useState } from 'react';
import axios from 'axios';
import './index.css';  

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [text, setText] = useState('');
  const [flashcards, setFlashcards] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!pdfFile) return alert("Please select a file!");

    const formData = new FormData();
    formData.append('file', pdfFile);
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload response:', res.data);
      setText(res.data.text);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Failed to upload PDF file');
    } finally {
      setLoading(false);
    }
  };

  const generateFlashcards = async () => {
    if (!text) return;

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/generate-flashcards', {
        content: text,
      });

      console.log('Flashcards response:', res.data);
      setFlashcards(res.data.flashcards);
    } catch (err) {
      console.error('Flashcard generation failed:', err);
      alert('AI failed to generate flashcards');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center font-sans">
      <h1 className="text-3xl font-bold mb-4"> FlashGen: AI Flashcard Creator</h1>

      <input type="file" accept=".pdf" onChange={handleFileChange} className="mb-2" />
      <br />
      <button onClick={uploadFile} className="bg-blue-600 text-white px-4 py-2 rounded m-2">
        Upload
      </button>

      {text && (
        <button onClick={generateFlashcards} className="bg-green-600 text-white px-4 py-2 rounded m-2">
          Generate Flashcards
        </button>
      )}

      {loading && <p className="mt-4 text-yellow-600">Processing...</p>}

      {flashcards && (
        <pre className="mt-4 bg-gray-100 p-4 rounded text-left whitespace-pre-wrap">
          {flashcards}
        </pre>
      )}
    </div>
  );
}

export default App;
