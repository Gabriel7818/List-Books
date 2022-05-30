import React , {useEffect,useState} from 'react';
import FormCss from './Form.module.css';
import api from '../../service/Api';
import { useNavigate, Link } from 'react-router-dom';
import UIButton from '../UI/Button/Button';

const initialValue = {
    id: 0,
    title: '',
    image:'',
    url: '',
    price: 0,
}

const BooksForm = ({id}) => {
    const[values, setValues] = useState(initialValue);
    const navigate = useNavigate();
    console.log(values);
    function onChange(ev){
        const{name, value} = ev.target;
        setValues({...values, [name]: value})
    }

    useEffect( ()=>{
        if(id){
            api.get(`/books/${id}`)
            .then( (response) => {
                setValues(response.data);
            })
        }

    }, [id])

    function onSubmit(ev){
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id
          ?`/books/${id}`
          :'/books'

          api[method](url, values)
          .then( (response) => {
              navigate('/');
          })
    }
    return(
        <div>
            <h2>Novo Livro</h2>
            <form onSubmit={onSubmit}>
                <div className={FormCss.BooksFormGroup}>
                <label htmlFor="title">Tpitulo</label>
                <input type="text" id="title" name="title" value={values.title} onChange={onChange} />
                </div>

                <div className={FormCss.BooksFormGroup}>
                <label htmlFor="title">Imagem</label>
                <input type="text" id="image" name="image" value={values.image} onChange={onChange} />
                </div>

                <div className={FormCss.BooksFormGroup}>
                <label htmlFor="url">Url</label>
                <input type="text" id="url" name="url" value={values.url} onChange={onChange} />
                </div>

                <div className={FormCss.BooksFormGroup}>
                <label htmlFor="price">Preço</label>
                <input type="number" step="any" id="price" name="price" value={values.price} onChange={onChange} />
                </div>

                <div className={FormCss.BooksFormButton}>
                    <UIButton type="submit" component="button">
                        Salvar
                    </UIButton>
                    <UIButton
                    to="/"
                    component={Link}
                    >
                        Voltar
                    </UIButton>
                </div>
            </form>
        </div>
    )
}

export default BooksForm;