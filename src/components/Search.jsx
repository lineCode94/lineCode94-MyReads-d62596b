import React from 'react'
import { useState  } from 'react'
import { search } from '../BooksAPI'
 import Book from './Book'
// import Menu from './Menu'
 
const Search = ({   allBooks ,onUpdateShelf }) => {
  const [query, setQuery]= useState('')
const [searchResults,setSearchResults] = useState([])
// console.log(searchResults)
  //TODO search handeler
  const searchBooks = (query, booksOnShelf ) => {
    search(query, 20)
    
      .then((books) => {
        if (!books.error) {
       
          books.forEach((book) => {
            booksOnShelf.forEach((b) => {
              if (b.id === book.id) {
                book.shelf = b.shelf;
              }
            });
          });
           
        

            setSearchResults(books);
          
          
        } else {
          console.log(2)

          setSearchResults([]);
        }
      })
      .catch((e) => {
        setSearchResults([]);
      });
 
  };
 
// useEffect(()=>{
//   const addNewBooks = async()=>{
//     if(query){

//       const res = await search(query,30)
//       console.log(res)
//       setSearchResult(res)
//     }
//   }
//   addNewBooks()
// },[query])
 
  const updateQuery = (q)=>{
    setQuery(q.trim())
  }
  // const emptyQuery=()=>{
  //   updateQuery("")
  // }
 
  const showBooks = searchResults === [] || query === ''  ? <p style={{fontSize:"30px",color:"#fff"}}>  No Books to Show👀!</p>:  ( 
 
     searchResults.map((book)=>(
      
     <Book  onUpdateShelf={onUpdateShelf}  key={book.id}   book={book}/>
        
   
  )))
 
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <a
        className="close-search"
        href='/'
      >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input
        value={query}
        onChange={(e)=>{updateQuery(e.target.value)
          searchBooks(e.target.value, allBooks)}
        }
          type="text"
          
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
     <div className="search-books-results">
     <div className="bookshelf-books">
      <ol className="books-grid">{
     
      showBooks
      }
      </ol>
      </div>
    </div> 
  </div>
  )
}

export default Search