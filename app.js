const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from jenkins, pm2 deployed Node.js app through jenkins cicd pipeline and this is myy second change');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});