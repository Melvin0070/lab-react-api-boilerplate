import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./App.css"

function App() {
  const [books, setBooks] = useState([])
  useEffect(()=>{
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: {
          Authorization: "whatever-you-want",
        },
      })
      .then((res)=>{
        const data = res.data.books
        setBooks(data)
        console.log(data)
      })
      .catch((err)=>{
        if (err.response && err.response.status === 404) {
          console.log("Status Code: 404");
          console.log("Website not found");
        }
      })
  },[])
  return (
    <div>
      <div className="wrapper">
 {books.map((book) => (

          <div  key={book.id}>
            <h1>{book.title}</h1>
<div className='flex'>
            <img 
            
              src={book.imageLinks.thumbnail}
              alt={book.title}
            />
            <p>
              {book.description}
            </p>
</div>
            <br />
            
            <h4>By- {book.authors}</h4>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App