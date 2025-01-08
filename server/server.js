// import express from "express";
// import axios from "axios";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/chat", async (req, res) => {
//   const userMessage = req.body.message;

//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: userMessage }],
//       },
//       {
//         headers: {
//           Authorization: `Bearer YOUR_API_KEY`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json({ reply: response.data.choices[0].message.content });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Ошибка в обработке запроса.");
//   }
// });

// app.listen(3001, () => {
//   console.log("Сервер запущен на порту 3001");
// });


const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/', (req, res) => {
  const userMessage = req.body.message;
  console.log('Received message:', userMessage);

  // Простой ответ от сервера
  res.json({ reply: 'Привет, это ответ от сервера!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
