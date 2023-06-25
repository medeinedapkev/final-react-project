import { useEffect, useState } from 'react';
import Container from '../../Components/Container/Container'
import axios from 'axios';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import styles from './BooksPage.module.css';
import BooksPageCard from '../../Components/BooksPageComponents/BooksPageCard/BooksPageCard';

const BooksPage = () => {
    const [ books, setBooks ] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/books?_expand=author&_expand=category`)
        .then(res => setBooks(res.data))
        .catch(err => toast.error(err.message))
    }, [])
    
    console.log(books)
    if (!books) {
      return;
    }

    const title = books.length > 0 && <h1 className={styles.title}>Visos knygos:</h1>
    
  return (
    <Container>
    <div className={styles.booksPageWrapper}>
      {title}
      <BooksPageCard data={books} />
    </div>
    </Container>
  )
}

export default BooksPage;