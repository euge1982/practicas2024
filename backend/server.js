// backend/server.js

const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

sequelize.sync()
  .then(() => {
    app.listen(5000, () => {
        // Se corre en el puerto 5000 porque el front se corre en el puerto 3000
        console.log('Servidor corriendo en http://localhost:5000');
    });
  })
  .catch((err) => {
    console.error('Error al conectar con la base de datos:', err);
  });
