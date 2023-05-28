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
