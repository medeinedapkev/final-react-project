import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import Container from '../../Components/Container/Container';
import Card from '../../Components/Card/Card';
import styles from './AuthorPage.module.css';
import AdministratorButton from '../../Components/AdministratorButton/AdministratorButton';

const AuthorPage = () => {
    const { id } = useParams();
    const [ booksByAuthor, setBooksByAuthor ] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/authors/${id}?_embed=books`)
        .then(res => setBooksByAuthor(res.data))
        .catch(err => toast.error(err.message));
    }, [id])

    if (!booksByAuthor) {
        return;
    }

    const title = booksByAuthor.books.length > 0 ? booksByAuthor.name : 'Šio autoriaus knygų nėra';

  return (
    <Container classes='color'>
      <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{title}</h1>
          <AdministratorButton
            toCreate='/authors/create' 
            toEdit={`/authors/edit/${id}`} 
            Delete={`/authors/${id}`}
            navigateTo='/authors'
            deleteToast='Author was successfully deleted'
          />
      </div>

        <Card data={booksByAuthor} />
    </Container>
  )
}

export default AuthorPage;