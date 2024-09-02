//  A React hook that allows you to perform side effects (like data fetching) in your components.

import { React, useState, useEffect } from 'react';


// A hook from React Router that lets you access URL parameters (in this case, the movie ID).
import { useParams } from "react-router-dom";

//  Imports the API_URL constant from the Context file. This contains the base URL and API key for fetching movie data from the OMDB API.
import { API_URL } from './Context';


// A component from React Router that allows navigation between different routes in the application.
import { NavLink } from 'react-router-dom';

const SingleMovie = () => {


  // : Extracts the id parameter from the URL using the useParams hook. This id will be used to fetch details of the specific movie.
  const { id } = useParams();


  const [isLoading, setIsLoading, isError, setIsError] = useState(true);

  const [movie, setMovie] = useState("");


  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);

      // const data = await res.json();: Converts the fetched data into a JSON object.
      const data = await res.json();

      console.log(data)

      if (data.Response === 'True') {
        setIsLoading(false);

        //Updates the movie state with the fetched movie data.

        setMovie(data);

      }


    } catch (e) {
      console.log(e);

    }

  };

  useEffect(() => {

    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);

// : A hook that runs the specified effect when the component mounts or when the id changes.

    }, 1000)
    return () => clearTimeout(timerOut);


  }, [id]);

  if (isLoading) {

    return (

      <div className='movie-section'>

        <div className='loading'>Loading...</div>

      </div>

    )

  }





  return (

    <section className='movie-section'>

      <div className='movie-card'>

        <figure>

          {/* : A figure element that wraps the movie poster. */}
          <img src={movie.Poster} alt="" />
        </figure>

        <div className='card-content'>

          <p className='title'>{movie.Title}</p>
          <p className='title'>{movie.Released}</p>
          <p className='title'>{movie.Genre}</p>
          <p className='title'>{movie.imdbRating}/10</p>
          <p className='title'>{movie.Country}</p>


          <NavLink to="/" className="back-btn">Go Back</NavLink>
        {/* A NavLink that allows the user to navigate back to the home page. It has a class of back-btn. */}

        </div>
      </div>

    </section>
  )
}

export default SingleMovie


