import express from 'express';
import movies from './movies.js';


const app = express();
const port = 3000;




// Définir une route GET pour la racine
app.get('/', (request, response) => {
  return response.end('Welcome to my first API'); 
});

app.get('/movies', (request, response) => {
    return response.json(movies); 
  });


// Le serveur écoute sur le port 3000
app.listen(port, () => {
  console.log('Bonjour, bienvenue sur mon serveur Express!');
});
