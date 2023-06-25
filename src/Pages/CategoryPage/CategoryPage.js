import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import CategoryCard from '../../Components/CategoryPageComponents/CategoryCard/CategoryCard';


const CategoryPage = () => {
    const { id } = useParams();
    const [ booksByCategory, setBooksByCategory ] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/categories/${id}?_embed=books`)
        .then(res => {
            console.log(res.data)
            setBooksByCategory(res.data)})
        .catch(err => toast.error(err.message));
    }, [id])

    if (!booksByCategory) {
        return;
    }

    console.log(booksByCategory.books.length )
    const title = booksByCategory.books.length > 0 ? booksByCategory.title : 'Šio žanro knygų nėra';
  return (
    <Container>
        <h1>{title}</h1>
        <CategoryCard data={booksByCategory}/>
    </Container>
  )
}

export default CategoryPage;