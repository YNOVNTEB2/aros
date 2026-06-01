// app.js — Application Node.js minimale
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Azure PaaS ! 🚀');
});

app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));
