/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import firebaseConfig from './../config/config';
import 'firebase/database'
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 



const AddMovie = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [movie, setMovie] = useState({
    "title":'',
    "description":'',
    "director":'',
    "imageURL":'',
    "rating":'',
    "year":'',
    "duration":''
  })
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [director, setDirector] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [rating, setRating] = useState(1);
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');

 const handleSubmit = async (e) =>  {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "movies" ), {
        "title":title,
        "description": description,
        "director":director,
        "imageURL":imageURL,
        "rating": rating,
        "year": year,
        "duration": duration
      });
      alert('Has introducido correctamente la pelicula')
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setTitle('');
    setDescription('');
    setDirector('');
    setImageURL('');
    setRating(1);
    setYear('');
    setDuration('');
  }


  return (
    <div className='frm'>
      <h2>Añadir Película</h2>
      <form  onSubmit={handleSubmit}>
        <input type="text" placeholder='Titulo' value={title} onChange={(e) => setTitle(e.target.value)} required />

        <textarea value={description} placeholder='Descripcion' onChange={(e) => setDescription(e.target.value)} required />

        <input type="text" value={director} placeholder='Director' onChange={(e) => setDirector(e.target.value)} required />

        <input type="url" value={imageURL} placeholder='Url de la imagen' onChange={(e) => setImageURL(e.target.value)} required />
    
        <label>Nota (1-5):</label>
        <input type="number" placeholder='Nota (1-5)' value={rating}  max="5" onChange={(e) => setRating(parseInt(e.target.value))} required />

        <input type="text" placeholder='Año' value={year} onChange={(e) => setYear(e.target.value)} required />

        <input type="number" value={duration} placeholder='Duracion (min)' onChange={(e) => setDuration(e.target.value)} required />

        <button type="submit">Añadir Película</button>
      </form>
    </div>
  );
};

export default AddMovie;