import Container from '../../Components/Container/Container';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../../config';
import { useNavigate } from 'react-router-dom';
import AuthorForm from '../../Components/AuthorForm/AuthorForm';


const CreateAuthor = () => {
    const navigator = useNavigate();

    function createAuthorHandler(newAuthor) {
        axios.post(`${API_URL}/authors`, newAuthor)
        .then(res => {
          console.log(res.data)
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