const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/usuarioRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');
const postRoutes = require('./routes/postRoutes');
const puntuacionRoutes = require('./routes/puntuacionRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/comentarios', comentarioRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/puntuaciones', puntuacionRoutes);

// Sincronizar la base de datos
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos conectada');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
