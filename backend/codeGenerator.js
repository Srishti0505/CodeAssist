const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const getCode = ({prompt}, cb) => {
  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            prompt,
        },
      ],
    })
    .then((response) => {
      // consokle.log(response.data);
      console.log(response.data.choices[0].message);
      cb(response.data.choices[0].message);
    });
};

module.exports = getCode;
