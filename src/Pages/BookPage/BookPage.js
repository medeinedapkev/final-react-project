import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import Container from '../../Components/Container/Container';
import BookPageItem from '../../Components/BookPageComponents/BookPageItem/BookPageItem';
import BookPageComments from '../../Components/BookPageComponents/BookPageComments/BookPageComments';

const BookPage = () => {
    const { id } = useParams();
    
    const [ book, setBook ] = useState(null);
    const [ comments, setComments ] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/books/${id}?_expand=author&_expand=category&_embed=comments`)
        .then(res => {
            setBook(res.data);
            setComments(res.data.comments);
        }).catch(err => toast.error(err.message));
    }, [id])

    if (!book || !comments) {
        return;
    }

  return (
    <Container>
        <BookPageItem data={book} />

        <BookPageComments data={comments} bookId={id} />
    </Container>
  )
}

export default BookPage;