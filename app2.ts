const express = require('express');
const app = express();
const port = 3000;

// @ts-ignore
app.get('/', (request, response) => {
  response.send('你好222!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
