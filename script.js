require("dotenv").config();
const inquirer = require("inquirer");
const { OpenAI } = require("langchain/llms/openai");


// Creates and stores a wrapper for the OpenAI package along with basic configuratio
const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  model: "gpt-3.5-turbo",
});

// Uses the instantiated OpenAI wrapper, model, and makes a call based on input from inquirer
const promptFunction = async (input) => {
  try {
    const res = await model.call(input);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};


// Initialization function that uses inquirer to prompt the user and returns a promise. It takes the user input and passes it through the call method
const init = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Ask a coding question:',
      },
    ]).then((inquirerResponse) => {
      promptFunction(inquirerResponse.name)
    });
  };
  
// Calls the init function
init();
