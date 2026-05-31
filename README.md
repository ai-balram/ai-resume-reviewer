# AI Resume Reviewer

An AI-powered Resume Reviewer built with React, TypeScript, Node.js, Express, PDF Parsing, and Local LLMs using Ollama.

The application allows users to upload a resume (PDF), paste a job description, and receive an AI-generated analysis including ATS score, strengths, missing skills, recommendations, and interview questions.

---

## Features

### Resume Upload
- Upload resume in PDF format
- Extract text automatically using PDF parser

### Job Description Analysis
- Paste any job description
- Compare resume against job requirements

### AI-Powered Insights
- Resume Match Score (0-100)
- Key Strengths
- Missing Skills
- Improvement Recommendations
- Interview Questions

### Local AI Support
- Runs locally using Ollama
- No dependency on paid AI APIs
- Privacy-friendly (resume stays local)

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
- Llama 3 / Qwen Models

---

## Architecture

```text
User Uploads Resume PDF
          │
          ▼
React Frontend
          │
          ▼
Express API
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
React Dashboard
```

---

## Project Structure

```text
ai-resume-reviewer
│
├── resume-reviewer-ui
│   ├── src
│   ├── public
│   └── package.json
│
├── resume-reviewer-api
│   ├── server.js
│   ├── aiService.js
│   ├── uploads
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-resume-reviewer.git

cd ai-resume-reviewer
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd resume-reviewer-api
```

Install dependencies:

```bash
npm install
```

Install Ollama:

```bash
brew install ollama
```

Start Ollama:

```bash
ollama serve
```

Pull model:

```bash
ollama pull llama3
```

or

```bash
ollama pull qwen3:8b
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

Navigate to frontend folder:

```bash
cd resume-reviewer-ui
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Environment Variables

Backend `.env`

```env
OPENAI_API_KEY=your_key_here
```

Note:
OpenAI integration is optional. Current implementation uses Ollama locally.

---

## API Endpoint

### Analyze Resume

**POST**

```http
POST /analyze
```

Request:

```text
multipart/form-data
```

Fields:

```text
resume          PDF File
jobDescription  String
```

Response:

```json
{
  "score": 85,
  "strengths": [
    "React",
    "TypeScript"
  ],
  "missingSkills": [
    "LangChain"
  ],
  "recommendations": [
    "Add AI projects"
  ],
  "interviewQuestions": [
    "Explain React rendering lifecycle"
  ]
}
```

---

## Future Enhancements

### Phase 2
- ATS Score Visualization
- Modern Dashboard UI
- Drag & Drop Resume Upload
- Resume Improvement Suggestions

### Phase 3
- AI Career Coach
- Personalized Learning Roadmap
- AI Architect Readiness Assessment
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
- REST API Design
- File Upload Handling
- PDF Parsing
- Prompt Engineering
- LLM Integration
- AI Application Architecture
- End-to-End Full Stack Development

---

## Author

Balram Sharma

AI Architect | Engineering Leader | AI Enthusiast