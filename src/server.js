const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Teste API");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});