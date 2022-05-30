import React from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import BooksPromotionSearch from "../Page/Search/Search";
import PageBooksForm from '../Page/Form/Form'

const Root = () => {
    return(
        <Router>
           <Routes>
              <Route  path="/" element={<BooksPromotionSearch/>} />  
              <Route path="/create" element={<PageBooksForm/>}/>
              <Route path="/edit/:id" element={<PageBooksForm/>}/>     
           </Routes>        
        </Router>

    )
}
export default Root;
