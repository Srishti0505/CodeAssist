const transformers = require("@huggingface/transformers");

// Load the CodeGen model
const model = transformers.AutoModelForCodeGen.from_pretrained("carperai/diff-codegen-350m-v2");

// Provide a prompt to the model
const prompt = "Write a function that takes two numbers as input and returns their sum.";

// Generate code from the model
const generatedCode = model.generate(prompt, max_length=100, do_sample=true);

// Print the generated code
console.log(generatedCode);