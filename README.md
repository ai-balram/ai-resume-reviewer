# AI Resume Reviewer

An AI-powered Resume Reviewer built with React, TypeScript, Node.js, Express, PDF Parsing, and Ollama.

The application allows users to upload a resume (PDF), paste a job description, and receive AI-generated insights including ATS score, strengths, missing skills, recommendations, and interview questions.

---

## Features

### Resume Upload
- Upload resume in PDF format
- Automatic PDF text extraction

### Job Description Analysis
- Paste any job description
- Compare resume against job requirements

### AI-Powered Insights
- Resume Match Score
- Strengths Identification
- Missing Skills Detection
- Improvement Recommendations
- Interview Questions Generation

### Local AI Support
- Uses Ollama locally
- No paid API required
- Privacy-friendly architecture

---

## Tech Stack

### Frontend
- React
- TypeScript
- Axios
- Vite

### Backend
- Node.js
- Express.js
- Multer
- PDF Parse

### AI
- Ollama
- Llama 3
- Prompt Engineering

---

## Architecture

```text
User Uploads Resume PDF
          │
          ▼
React Frontend
          │
          ▼
Express Backend API
          │
          ▼
PDF Parsing
          │
          ▼
Resume Text
          +
Job Description
          │
          ▼
Prompt Engineering
          │
          ▼
Ollama LLM
          │
          ▼
JSON Analysis
          │
          ▼
Frontend Dashboard
```

---

## Project Structure

```text
resume-reviewer
│
├── ai-resume-reviewer
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
├── resume-reviewer-api
│   ├── server.js
│   ├── aiService.js
│   ├── uploads
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/ai-balram/ai-resume-reviewer.git

cd ai-resume-reviewer
```

---

## Backend Setup

Open a terminal:

```bash
cd resume-reviewer-api
```

Install dependencies:

```bash
npm install
```

Install Ollama:

### macOS

```bash
brew install ollama
```

Start Ollama:

```bash
ollama serve
```

Pull a model:

```bash
ollama pull llama3
```

Start backend:

```bash
node server.js
```

Backend runs on:

```text
http://localhost:8000
```

---

## Frontend Setup

Open a second terminal:

```bash
cd ai-resume-reviewer
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoint

### Analyze Resume

**POST**

```http
POST /analyze
```

Content Type:

```text
multipart/form-data
```

Request Fields:

```text
resume          PDF File
jobDescription  String
```

Sample Response:

```json
{
  "score": 82,
  "strengths": [
    "React",
    "TypeScript",
    "Leadership"
  ],
  "missingSkills": [
    "LangChain",
    "RAG"
  ],
  "recommendations": [
    "Add AI projects",
    "Highlight architecture achievements"
  ],
  "interviewQuestions": [
    "Explain React rendering lifecycle",
    "How would you design a RAG system?"
  ]
}
```

---

## Environment Variables

Backend `.env`

```env
OPENAI_API_KEY=your_api_key_here
```

or

```env
OLLAMA_MODEL=llama3
```

Note:

The current implementation uses Ollama locally and does not require a paid AI API.

---

## Screenshots

Add screenshots here after deployment.

Example:

```md
![Application Screenshot](docs/screenshot.png)
```

---

## Future Enhancements

### Phase 2
- ATS Score Gauge
- Better UI/UX
- Drag and Drop Resume Upload
- Resume Improvement Suggestions

### Phase 3
- AI Career Coach
- Personalized Learning Roadmap
- AI Readiness Assessment
- Resume Version Comparison

### Phase 4
- Vector Database Integration
- RAG Architecture
- Multi-Agent Resume Evaluation
- Cloud Deployment

---

## Learning Outcomes

This project demonstrates:

- React + TypeScript Development
- REST API Development
- File Upload Handling
- PDF Parsing
- Prompt Engineering
- LLM Integration
- Full Stack Development
- AI Application Architecture

---

## Author

**Balram Sharma**

AI Architect

---

## License

This project is for learning, experimentation, and portfolio purposes.