import styles from './BooksPage.module.css';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import Container from '../../Components/Container/Container'
import BooksPageCard from '../../Components/BooksPageComponents/BooksPageCard/BooksPageCard';

const BooksPage = () => {
    const [ books, setBooks ] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/books?_expand=author&_expand=category`)
        .then(res => setBooks(res.data))
        .catch(err => toast.error(err.message));
    }, [])
    
    if (!books) {
      return;
    }

    const title = books.length > 0 ? 'Visos knygos:' : 'Knygų nėra';
    
  return (
  <Container>
    <div className={styles.booksPageWrapper}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.bookCardWrapper}>
        <BooksPageCard data={books} />
      </div>
    </div>
  </Container>
  )
}

export default BooksPage;