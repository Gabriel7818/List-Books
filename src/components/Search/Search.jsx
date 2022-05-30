import React, {useEffect, useState} from "react";
import searchCss from './Search.module.css';
import api from '../../service/Api';
import Books from '../Books/Books';
import {Link} from "react-router-dom";
import UIButton from "../UI/Button/Button"


const PromotionSearch = () => { 
  const [books, setbooks] =  useState([]);
  const[ search, setSearch] = useState('');
  const[onDelete, setonDelete] = useState(null);

   useEffect(() => {
     const params = {};
     if (search) {
       params.title_like = search;}
       
       const getSeach = async () => {
         try {
           const books = await api.get('/books?_order=desc&_sort=id', {params} ) 
           setbooks(books.data);
          } catch (error){
            console.log(error);
          }}
          getSeach();

   }, [search,onDelete])
   const handDelete = async (id) => {
    try{
     await api.delete(`/books/${id}`);
     setonDelete(id);
    }catch (error){
      console.log(error);
    }}

    return (
   <>
   <header className={searchCss.PromotionSearchHeader}>
     <h1>Novo livro ?</h1>
     <UIButton to= "/create"  component={Link}>Nova promoção</UIButton>
   </header>
   <input type="search"
   className={searchCss.BooksSearchInput} 
   placeholder="Busca"
   value={search}
   onChange={(ev) => setSearch(ev.target.value)}
   />
    {books.map((books) =>(
      <Books books={books} key={books.id} onClickDeleted={()=> handDelete(books.id)}/>
     ) )}  
   </>
);

};

export default PromotionSearch;

