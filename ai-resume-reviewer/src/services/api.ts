import axios from "axios";

export const analyzeResume = async (
  jobDescription: string,
  resumeFile: File | null
) => {

  const formData = new FormData();

  formData.append(
    "jobDescription",
    jobDescription
  );

  if (resumeFile) {
    formData.append(
      "resume",
      resumeFile
    );
  }

  const response =
    await axios.post(
      "http://localhost:8000/analyze",
      formData
    );

  return response.data;
};