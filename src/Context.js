import React, { useEffect, useContext, useState } from 'react'

export const API_URL = `http://www.omdbapi.com/?apikey=31e3a9bb`

// Creates a context object named AppContext. Context allows you to share data (state) across your entire app without having to pass props down manually through every level of the component tree.


const AppContext = React.createContext();


// we need to create the  provider 

const AppProvider = ({ children }) => {

    // nitializes a state variable isLoading with true, indicating that the app is currently loading data
    const [isLoading, setIsLoading] = useState(true);

    // Initializes a state variable movie as an empty array, which will later hold the fetched movie data.
    const [movie, setMovie] = useState([]);


    // This will handle any errors that occur during data fetching.
    const [isError, setIsError] = useState({ show: "false", msg: "" });


    //  Initializes a state variable query with the value "titanic". This state will store the search term for the movies.
    const [query, setQuery] = useState("titanic");


    // function that takes a url as an argument and fetches movie data from the OMDB API.
    const getMovies = async (url) => {
        //  Sets isLoading to true before starting the API call, indicating that data is being fetched.
        setIsLoading(true);
        try {

            //  Fetches data from the provided url.
            const res = await fetch(url);
            // Converts the fetched data into a JSON object.
            const data = await res.json();
            console.log(data)

            // Checks if the API response indicates a successful data fetch.
            if (data.Response === 'True') {



                //Sets isLoading to false, indicating that data has been successfully fetched.
                setIsLoading(false);


              // Resets the isError state to indicate no error occurred.
                setIsError({
                    show: false,
                    msg: "",
                });

                //  Stores the fetched movie data in the movie state variable.
                setMovie(data.Search);

            } else {

                // If the API response indicates an error (e.g., movie not found), it updates the isError state with the error message.
                setIsError({
                    show: true,
                    msg: data.Error
                });

            }


        } catch (e) {
            console.log(e);

        }

    };

    //  This hook runs the specified effect (fetching movies) when the component mounts or when the query changes.

    useEffect(() => {

        let timerOut = setTimeout(() => {

            // Calls the getMovies function with the current search query.
            getMovies(`${API_URL}&s=${query}`);


        }, 1000)
        return () => clearTimeout(timerOut);


    }, [query]);

    return (

        //  Wraps the children components with the AppContext.Provider, passing down the values of isLoading, isError, movie, query, and setQuery to any component that needs them.

        <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
            {children}

        </AppContext.Provider>
    );


};

// golbal custom hooks

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };



// context api is like the ware house, where all the data is presnet and we need to use it when eve we want.

//context(WArehouse)

//provider of the data

// consumer of the data useContext() hook
