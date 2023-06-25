import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import Container from '../../Components/Container/Container';
import Card from '../../Components/Card/Card';

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
    <Container>
        <h1>{title}</h1>
        <Card data={booksByAuthor} />
    </Container>
  )
}

export default AuthorPage;