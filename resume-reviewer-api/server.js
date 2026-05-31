require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { PDFParse } = require("pdf-parse");
const OpenAI = require("openai");
const { analyzeResume } = require("./aiService");

const app = express();

const openai = new OpenAI({
  //apiKey: process.env.OPENAI_API_KEY
  apiKey: process.env.BEDROCK_API_KEY
});

app.use(cors());
app.use(express.json());

const upload = multer({
  dest: "uploads/"
});

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post(
  "/analyze",
  upload.single("resume"),
  async (req, res) => {
    try {
      // Validate request
      if (!req.file) {
        return res.status(400).json({
          error: "Resume file is required"
        });
      }

      const { jobDescription } = req.body;

      if (!jobDescription) {
        return res.status(400).json({
          error: "Job Description is required"
        });
      }

      // Read PDF
      const pdfBuffer = fs.readFileSync(req.file.path);

      // Parse PDF
      const parser = new PDFParse({
        data: pdfBuffer
      });

      const result = await parser.getText();

      const resumeText = result.text;

      console.log("Resume parsed successfully");

      // Build Prompt
      const prompt = `
        You are an expert technical recruiter and ATS evaluator.

        Analyze the resume against the job description.

        Return ONLY valid JSON.

        {
          "score": 0,
          "summary": "",
          "strengths": [],
          "missingSkills": [],
          "recommendations": [],
          "interviewQuestions": [],
          "skillGapAnalysis": [],
          "learningRoadmap": []
        }

        Rules:
        - score must be 0-100
        - summary must be 2-3 sentences
        - strengths: maximum 5 items
        - missingSkills: maximum 5 items
        - recommendations: maximum 5 items
        - interviewQuestions: maximum 5 items
        - skillGapAnalysis: maximum 5 items
        - learningRoadmap: maximum 5 items

        Return JSON only.
        No markdown.
        No explanations.

        Resume:
        ${resumeText}

        Job Description:
        ${jobDescription}
        `;

      // Call AI Model
    console.log("Calling AI Model...");
    const aiResponse = await analyzeResume(prompt);
    const cleanedResponse = aiResponse
      .replace("```json", "")
      .replace("```", "")
      .trim();
    console.log("RAW RESPONSE");
    console.log(aiResponse);
    
    const start = aiResponse.indexOf("{");
    const end = aiResponse.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("No JSON found in AI response");
    }

    const jsonString =
      aiResponse.substring(start, end + 1);

    console.log("EXTRACTED JSON:");
    console.log(jsonString);

    const parsedResponse =
      JSON.parse(jsonString);

    return res.json(parsedResponse);

    } catch (error) {
      console.error("Error:", error);

      res.status(500).json({
        error: "Failed to analyze resume"
      });
    }
  }
);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});