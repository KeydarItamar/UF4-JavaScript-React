import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from './../config/config';
import MovieCard from './MovieCards';
const MovieList = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "movies"));
        const moviesData = [];
        querySnapshot.forEach((doc) => {
          moviesData.push({ id: doc.id, ...doc.data() });
        });
        setMovieList(moviesData);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    };

    fetchMovies();
  });
  return (
    <div className='movies'>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.imageURL}
          direction = {movie.director}
          rate = {movie.rating}
          desc={movie.description}
          >
        </MovieCard>
      ))}
    </div>
  );
};

export default MovieList;
