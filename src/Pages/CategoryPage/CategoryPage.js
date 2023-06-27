import styles from './CategoryPage.module.css'
import Card from '../../Components/Card/Card';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';
import Container from '../../Components/Container/Container';
import AdministratorButton from '../../Components/AdministratorButton/AdministratorButton';

const CategoryPage = () => {
    const { id } = useParams();

    const [ booksByCategory, setBooksByCategory ] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/categories/${id}?_embed=books`)
        .then(res => {
            console.log(res.data);
            setBooksByCategory(res.data);
          }).catch(err => toast.error(err.message));
    }, [id])

    if (!booksByCategory) {
        return;
    }

    const title = booksByCategory.books.length > 0 ? booksByCategory.title : 'Šio žanro knygų nėra';

  return (
    <Container>
        <div className={styles.titleWrapper}>
          <h1>{title}</h1>
          <AdministratorButton 
            toCreate='/categories/create' 
            toEdit={`/categories/edit/${id}`} 
            Delete={`/categories/${id}`}
            navigateTo='/categories'
            deleteToast='Category was successfully deleted'
          />
        </div>
        
        <Card data={booksByCategory}/>
    </Container>
  )
}

export default CategoryPage;