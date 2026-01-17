const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sosRoutes = require('./src/routes/sosRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/api/sos', sosRoutes);

app.get('/', (req, res) => {
  res.send('Microservicio SOS (Backend Propio + Knex) Funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});