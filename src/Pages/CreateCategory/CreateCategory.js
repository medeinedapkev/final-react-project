import Container from '../../Components/Container/Container';
import CategoriesForm from '../../Components/CategoriesForm/CategoriesForm';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../../config';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
  const navigator = useNavigate();

  function createCategoryHandler(newCategory) {
    axios.post(`${API_URL}/categories`, newCategory)
    .then(res => {
      console.log(res.data)
        navigator('/categories');
        toast.success('New category was successfully created');
    }).catch(err => toast.error(err.message));
  }

  return (
    <Container>
        <CategoriesForm onCategoryFormSubmit={createCategoryHandler} />
    </Container>
  )
}

export default CreateCategory;