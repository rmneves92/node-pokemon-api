const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const { success } = require('./helper');
const pokemons = require('./mock-pokemon');

const app = express();
const port = 3000;

app.use(favicon(__dirname + '/favicon.ico')).use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello, Express! 😄'));

app.get('/api/pokemons', (req, res) => {
  const message = 'La liste des pokémons a bien été trouvé.';
  res.json(success(message, pokemons));
});

app.get('/api/pokemons/:id', (req, res) => {
  const id = +req.params.id;
  const pokemon = pokemons.find(pokemon => pokemon.id === id);
  const message = 'Un pokémon a bien été trouvé.';

  res.json(success(message, pokemon));
});

app.listen(port, () => console.log(`Notre application Node est démarrée sur: http://localhost:${port}`));
