import React from 'react';
import BooksForm from '../../components/Form/Form';
import UIContainer from "../../components/UI/Container/container";
import {useParams} from 'react-router-dom'

const PageBooksForm = () => {
     const { id } =useParams();
    return(
        <UIContainer>
            <BooksForm id={ id ? Number.parseInt(id, 10) : null} />
        </UIContainer>
    )
}

export default PageBooksForm;