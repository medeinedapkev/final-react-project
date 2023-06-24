import styles from './CategoriesForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { firstLetterUpperCase } from '../Functions/Functions';

const CategoriesForm = () => {
    const [ category, setCategory ] = useState('');

    const categoryHandler = (event) => setCategory(event.target.value);

    function categoryFormHandler(event) {
        event.preventDefault();
        const title = category.trim();
        
        if (title.length < 3) {
            toast.warning('The category must have at least 3 letters')
            return;
        }
        const newCategory = { title: firstLetterUpperCase(title) };

        axios.post(`${API_URL}/categories`, newCategory)
        .then(res => {
            setCategory('');
            toast.success('New category was successfully created');
        }).catch(err => toast.error(err.message));
    }

  return (
    <div className='categoriesFormWrapper'>
    <h2 className={styles.formTitle}>Create new category:</h2>
    <Form onSubmit={categoryFormHandler}>
      <div className={styles.formControl}>
         <Form.Label htmlFor="categoryInput" visuallyHidden>Category: </Form.Label>
           <Form.Control
           className="mb-2"
           id="categoryInput"
           placeholder="Category"
           value={category}
           onChange={categoryHandler}
           />
        
        <Button type="submit" className="mb-2">Submit</Button>
      </div>
    </Form>
    </div>
  )
}

export default CategoriesForm;