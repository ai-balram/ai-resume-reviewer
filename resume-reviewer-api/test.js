const {
  analyzeResume
} = require("./aiService");

async function test() {

  const result =
    await analyzeResume(
      "Explain React in 50 words"
    );

  console.log(result);
}

test();