import React from 'react';
// import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import UIButton from '../UI/Button/Button'
import {Link} from "react-router-dom";
import {Trash} from 'phosphor-react'

const ItemContainer =  styled.div`
    align-items: center;
    border-radius: 4px;
    background-color: #ccc;
    height: 140px;
    width: 350px;
    color: #29303b;
    margin-bottom: 4px;
    margin-right: 8px;
    margin-left: 8px;
    padding: 6px;
    flex-direction: column;
    display: inline-block;
    position: relative;`;


const TitlePlane = styled.div`
     font-weight: bold;
     margin-bottom: 5px;`;


const ItemLink = styled.a`
    text-decoration:none;`;


const PricePane = styled.div`
    margin-bottom:5px;`;


const Thumbnail = styled.img`
     width:auto;
     height:100%;
     border:0;
     vertical-align: middle;
     float: left;
     margin-right: 10px;`;

 const ButtonDelet = styled.button`
  border: unset;
  background-color: unset;
  position: absolute;
  top: 5px;
  right: 10px;
 `;

const Books = ({books,onClickDeleted}) => {
    return (
      <ItemLink>
          <ItemContainer>
           <Thumbnail src={books.image}></Thumbnail>
           <TitlePlane>{books.title}</TitlePlane>
           <PricePane> R$ {books.price}</PricePane>
           <UIButton component="a"  href={books.url} title="Clique para comprar">Comprar</UIButton>
           <UIButton component={Link}  to={`/edit/${books.id}`} >Editar</UIButton>
           <ButtonDelet type="button" onClick={onClickDeleted}>
          <Trash size={20} color="#bf1d1d" weight="thin" />
          </ButtonDelet>
          </ItemContainer>
      </ItemLink>
    )
  }
  
  export default Books;
  