import axios from 'axios';
import Container from '../../Components/Container/Container';
import BookForm from '../../Components/BookForm/BookForm';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const EditBook = () => {
  const { id } = useParams();
  const navigator = useNavigate();

  const [ book, setBook ] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/books/${id}`)
    .then(res => setBook(res.data))
    .catch(err => toast.error(err.message));
  }, [id])

  function editBookHandler(editedBook) {
    axios.patch(`${API_URL}/books/${id}`, editedBook)
    .then(res => {
      toast.success('Book was seccessfully edited');
      navigator(`/books/${id}`);
    }).catch(err => toast.error(err.message));
  }

  if (!book) {
    return;
  }

  return (
    <Container>
        <BookForm onBookFormSubmit={editBookHandler} initialData={book} />
    </Container>
  )
}

export default EditBook;