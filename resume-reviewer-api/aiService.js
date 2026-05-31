const ollama = require('ollama').default;

async function analyzeResume(prompt) {
  const response =
    await ollama.chat({
      model: "llama3",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });
  return response.message.content;
}

module.exports = {
  analyzeResume
};