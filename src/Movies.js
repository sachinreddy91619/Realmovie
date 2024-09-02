import React from 'react'

//import { AppContext } from './Context'

import { useGlobalContext } from "./Context";

// NavLink is used for navigation between different routes in a React app.
import { NavLink } from 'react-router-dom';

const Movies = () => {

  const { movie, isLoading } = useGlobalContext();

  // movie: An array containing movie objects fetched from an API or database.

  //  isLoading: A boolean that indicates whether the data is still loading. If true, it shows a loading message.

  if (isLoading) {

    return (
      <div className='movie-section'>

        <div className='loading'>Loading...</div>
      </div>
    );
  }

  return (

    <>
      <section className='movie-page'>

        <div className=' container grid grid-4-col'>

          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;

            // Destructuring: Destructures the movie object to extract imdbID, Title, and Poster from the movie
            const movieName = Title.substring(0, 15);
            // Takes the first 15 characters of the movie title to avoid long titles in the UI.

            return (
              <NavLink to={`movie/${imdbID}`}>

                <div className='card'>
                  <div className='card-info'>

                    <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                    <img src={Poster} alt={imdbID} key={imdbID} />
                  </div>

                </div>

              </NavLink>
            )
          })}

        </div>

      </section>



    </>
  );
};

export default Movies