import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import Container from '../../Components/Container/Container';
import CategoriesForm from '../../Components/CategoriesForm/CategoriesForm';

const EditCategory = () => {
    const { id } = useParams();
    const navigator = useNavigate();
    
    const [ category, setCategory ] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/categories/${id}`)
        .then(res => setCategory(res.data))
        .catch(err => toast.error(err.message));
    }, [id])

    function editCategoryHandler(editedCategory) {
        axios.patch(`${API_URL}/categories/${id}`, editedCategory)
        .then(res => {
            navigator('/categories');
            toast.success('Category was successfully edited');
        }).catch(err => toast.error(err.message));
    }

    if (!category) {
        return;
    }

  return (
    <Container>
        <CategoriesForm initialData={category} onCategoryFormSubmit={editCategoryHandler} />
    </Container>
  )
}

export default EditCategory;