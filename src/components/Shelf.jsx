import React from 'react'
import { Link } from "react-router-dom";
// import { useState } from 'react';
import Book from './Book';

const Shelf = ({shelf,shelfTitle, allBooks,onUpdateShelf}) => {
 
  //get book for each shelf 
 const shelfBooks= allBooks.filter((book) => book.shelf === shelf);
 
     
    
  return (
    <>
    
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol  className="books-grid">
            {shelfBooks.map((book)=>(
              <Book onUpdateShelf={onUpdateShelf} key={book.id}   book={book}/>
            ))}
          </ol>
    
     
     </div>
  </div>
      <div className="open-search">
        <Link to="/search"  >Add a book</Link>
      </div>
   
  </>
  )
}

export default Shelf