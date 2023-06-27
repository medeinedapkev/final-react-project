import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import Container from '../../Components/Container/Container';
import AuthorForm from '../../Components/AuthorForm/AuthorForm';

const CreateAuthor = () => {
    const navigator = useNavigate();

    function createAuthorHandler(newAuthor) {
        axios.post(`${API_URL}/authors`, newAuthor)
        .then(res => {
            navigator('/authors');
            toast.success('New author was successfully created');
        }).catch(err => toast.error(err.message));
      }

  return (
    <Container>
        <AuthorForm onAuthorFormSubmit={createAuthorHandler} />
    </Container>
  )
}

export default CreateAuthor;