const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Write HTML, JS and bootstrap 5 code for a simple contacts page that takes in a name, email, and message and sends it to a database."}],
}).then((response) => {
    // consokle.log(response.data);
    console.log(response.data.choices[0].message);
})
