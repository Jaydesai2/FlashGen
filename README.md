FlashGen is a full-stack application that empowers users to upload a PDF document and receive automatically generated flashcards using Natural Language Processing (NLP). Built with modern web technologies and local Python integration, FlashGen helps you study smarter — all without requiring any external API keys.


# FlashGen 

FlashGen is a full-stack project that allows users to upload a PDF file and automatically generates flashcards using a local Python script with NLP.

## 🧠 Features
- Upload PDF file from browser
- Extract and clean text using pdf-parse
- Generate flashcards using Python + NLTK (sentence tokenization)
- Fully working local setup (no API key required)
- Frontend: React + Vite
- Backend: Express.js + Python (textgen.py)

## 🛠️ Setup Instructions

### Backend Setup (Node + Express + Python)
1. Go to the `server` folder:
    ```bash
    cd server
    npm install
    node index.js
    ```

2. Ensure Python 3 is installed and `nltk` is available:
    ```bash
    pip install nltk
    -m pip install nltk
    
    python -
    
    import nltk
    nltk.download('punkt')
    nltk.download('punkt_tab')
    exit()
    ```

### Frontend Setup (React + Vite)
1. Go to the `client` folder:
    ```bash
    cd client
    npm install
    npm install axios
    npm run dev
    ```

2. Open browser at: `http://localhost:5173`

## Created by [Jay desai] = [https://github.com/Jaydesai2/FlashGen]
## created by [Ovesh khatri] = [https://github.com/Ovesh1/FlashGen] #   F l a s h G e n 
 
 
