import React,{useState, useEffect} from 'react';
import Books from '../../components/Books/Books'
import api from '../../service/Api'

const PagesListBooks = () => {
 
    const [listbooks, setbooks] =  useState([]);

    useEffect(() => {
      api.get('/books')
      .then((response) => {
        setbooks(response.data);

      }
      );
     }, [])

     return(
        <>
          {listbooks.map((books) =>(
            <Books books={books} key={books.id}/>
           ) )}
        </>
    )
}


export default PagesListBooks;







