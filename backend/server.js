const express = require('express');
const cors = require('cors'); // Importer cors
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Utiliser cors pour toutes les requêtes
app.use(express.json());

// Connexion à la DB
const db = require('./db');
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
