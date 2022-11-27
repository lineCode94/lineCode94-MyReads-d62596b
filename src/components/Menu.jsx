import React from 'react'
// import { useState } from 'react';

const Menu = ({ book,onUpdateShelf}) => {

 
  const handleUpdateBookSelf =(e)=>{
    const values = e.target.value;
    console.log(values)
    console.log(book)
    onUpdateShelf(book,values)
  }
 
 

  return (
    <div className="book-shelf-changer">
    <select value={book.shelf ? book.shelf : "none"} onChange={handleUpdateBookSelf}>
      <option value="none" disabled>
        Move to...
      </option>
      <option   value="currentlyReading">
        Currently Reading
      </option>
      <option  value="wantToRead">Want to Read</option>
      <option    value="read">Read</option>
      <option    value="none">None</option>
    </select>
  </div>
  )
}

export default Menu