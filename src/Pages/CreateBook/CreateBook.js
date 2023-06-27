import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import BookForm from '../../Components/BookForm/BookForm';
import Container from '../../Components/Container/Container';

const CreateBook = () => {
    const navigator = useNavigate();

    function createBookHandler(newBook) {
        axios.post(`${API_URL}/books`, newBook)
        .then(res => {
            navigator(`/books/${res.data.id}`);
            toast.success('New book was created successfully');
        }).catch(err => toast.error(err.message));
    }

  return (
    <Container>
        <BookForm onBookFormSubmit={createBookHandler} />
    </Container>
  )
}

export default CreateBook;