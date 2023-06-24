import { useEffect, useState } from 'react';
import Container from '../../Components/Container/Container'
import axios from 'axios';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const BooksPage = () => {
    const [ books, setBooks ] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/books`)
        .then(res => setBooks(res.data))
        .catch(err => toast.error(err.message))
    }, [])

    if (!books) {
        return;
    }

  return (
    <Container>
        {books.map(book => <Link key={book.id} to={`/books/${book.id}`}>{book.title}</Link>)}
    </Container>
  )
}

export default BooksPage;