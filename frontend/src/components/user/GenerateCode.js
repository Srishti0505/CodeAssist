import React, { useState } from 'react';
import axios from 'axios';

const GenerateCode = () => {
  const [code, setCode] = useState('');

  const generateCode = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: 'Generate code to ',
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
      });

      setCode(response.data.choices[0].text);
    } catch (error) {
      console.error('Error generating code:', error);
    }
  };

  return (
    <div>
      <button onClick={generateCode}>Generate Code</button>
      <pre>{code}</pre>
    </div>
  );
};

export default GenerateCode;
