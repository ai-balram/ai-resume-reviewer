import { useState } from "react";
import { analyzeResume } from "./services/api";
import type { AnalysisResult } from "./types/AnalysisResult";

function App() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {

    if (!jobDescription.trim()) {
      setError("Please enter a job description");
      return;
    }

    if (!resumeFile) {
      setError("Please upload a resume");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await analyzeResume(
        jobDescription,
        resumeFile
      );

      setResult(data);

    } catch (err: any) {
      console.error(err);

      setError(
        err?.response?.data?.error ||
        "Failed to analyze resume"
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <h1>AI Resume Reviewer</h1>

      <textarea
        rows={10}
        cols={80}
        placeholder="Paste Job Description Here"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setResumeFile(
              e.target.files[0]
            );
          }
        }}
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && (
        <div>
          <h2>Score: {result.score}</h2>
          <h3>Strengths</h3>
          <ul>
            {result.strengths.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Missing Skills</h3>
          <ul>
            {result.missingSkills.map((item: string) => (
              <li key={item}>❌ {item}</li>
            ))}
          </ul>
          <h3>Recommendations</h3>
          <ul>
            {result.recommendations.map((item: string) => (
              <li key={item}>💡 {item}</li>
            ))}
          </ul>

          <h3>Interview Questions</h3>
          <ul>
            {result.interviewQuestions.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {error && (
        <p>{error}</p>
      )}
    </div>
  );
}

export default App;