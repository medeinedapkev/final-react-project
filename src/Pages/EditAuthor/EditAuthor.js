import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import Container from '../../Components/Container/Container';
import AuthorForm from '../../Components/AuthorForm/AuthorForm';

const EditAuthor = () => {
    const { id } = useParams();
    const navigator = useNavigate();

    const [ author, setAuthor ] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/authors/${id}`)
        .then(res => setAuthor(res.data))
        .catch(err => toast.error(err.message));
    }, [id])

    function editAuhtorHandler(editedAuthor) {
        axios.patch(`${API_URL}/authors/${id}`, editedAuthor)
        .then(res => {
            navigator('/authors');
            toast.success('Author was successfully edited');
        }).catch(err => toast.error(err.message));
    }

    if (!author) {
        return;
    }
    
  return (
    <Container>
        <AuthorForm initialData={author} onAuthorFormSubmit={editAuhtorHandler} />
    </Container>
  )
}

export default EditAuthor;