import React from 'react'

// This imports a custom hook useGlobalContext from a file named Context. This hook is likely used to access global state or functions.
import { useGlobalContext } from './Context'

const Search = () => {
  //  Destructuring the Context

  // query: Holds the current search input value.

  //
  const { query, setQuery, isError } = useGlobalContext();
  return (

    <>
      <section className='search-section'>
        <h2>Search your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            {/* /*  When the user types in the input box, this function updates the query state with the current input value. */ }
            <input type="text" placeholder='search-here' value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </form>

        <div className='card-error'>
          {/* This checks if isError.show is true. If it is, it displays the error message isError.msg inside the paragraph. */}
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}
export default Search;


// ..> e.preventDefault(): This is a method provided by the event object e. It stops the default behavior of the form submission.

// ..> Default Behavior: Normally, when a form is submitted, the browser would refresh the page or navigate to the URL specified in the action attribute.
// ..> Preventing the Default: By calling e.preventDefault(), you're telling the browser, "Don't do the usual form submission behavior."


// ...> his is useful when you want to handle the form submission with JavaScript (e.g., validating the input, updating the state, or sending the data with an API call) instead of letting the browser handle it in the traditional way.