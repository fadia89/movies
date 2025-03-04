import express, { request } from 'express';
import movies from './movies.js';


const app = express();
const port = 3000;
//autoriser express d'envoyer des json (body pour le post)
app.use(express.json())
app.use(express.urlencoded({extended : true}))



// Définir une route GET pour la racine
app.get('/', (request, response) => {
  return response.end('Welcome to my movies API'); 
});

app.get('/movies', (request, response) => {
    return response.json(movies); 
  });

  app.get ('/movies/:id',(request, response) => {
    //console.log (typeof request.params.id)
    const movieID = request.params.id;
    //const {id} = request.params;
    console.log (movieID);
    const movieById = movies.find(movie => movie.id == movieID)
    if (!movieById) {
      return response.status(404).json({messages: 'Movie not found'})
    }
      return response.status(200).json(movieById)
  });

// Définir une route POST
app.post('/movies', (request,response) => {
  
  const {title,genre} = request.body
  if (!title || !genre)
    {
    return response.status(400).json({ message: 'Missing required movie information (title, genre)' });
    }


 
  console.log (title, genre)
  // Crée un nouveau film
  const newMovie = {
    id: movies.length+1,
    title, //=title: title,
    genre

  };
  //console.log(newMovie)

   // Ajoute le film à la liste des films
  movies.push(newMovie);
  return response.status(201).json(newMovie)
  
});



// Le serveur écoute sur le port 3000
app.listen(port, () => {
  console.log('Bonjour, bienvenue sur mon serveur Express!');
});
