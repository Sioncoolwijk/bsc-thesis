/* 
This file sets up a node.js server to receive the text from the front-end, sending it to the GPT API.
The following source helped building this code: https://www.youtube.com/watch?v=LX_DXLlaymg
*/

import dotenv from 'dotenv';
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
    organization: "org-YH2aAHYnQZH20vqTPLBIlRiV",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration)

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {

    const { message } = req.body;
    
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "user", content: `Summarize the following text in Dutch using exactly 20 words: ${message}`},
        ],
        temperature: 0.7,
    })

    // console.log(completion.data.choices[0].message)

    res.json({
        completion: completion.data.choices[0].message
    })

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

