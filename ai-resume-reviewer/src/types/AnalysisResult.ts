export interface AnalysisResult {
  score: number;
  strengths: string[];
  missingSkills: string[];
  recommendations: string[];
  interviewQuestions: string[];
}