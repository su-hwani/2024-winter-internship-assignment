require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const projectRouter = require('./context/project/projectRouter')

app.use(express.json());

app.use('/projects', projectRouter);

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

