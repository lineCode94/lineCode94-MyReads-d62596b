import React from 'react'
import Menu from './Menu'

const Book = ({book,onUpdateShelf}) => {
  return (
    
  
               
    <li key={book.id}>                    
      <div className="book">
          <div className="book-top">
          <div
              className="book-cover"
              style={{
              width: 128,
              height: 193,
              backgroundImage:
              `url(${book.imageLinks.smallThumbnail})`
              }}
          ></div>
             
                
        <Menu book={book} onUpdateShelf={onUpdateShelf}/>
         
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
  </div>
  </li>

 
 
   
)}

export default Book