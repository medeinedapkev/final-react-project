import styles from './CategoriesForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { firstLetterUpperCase } from '../Functions/Functions';

const CategoriesForm = ({ onCategoryFormSubmit, initialData }) => {
    const [ category, setCategory ] = useState('');

    const categoryHandler = (event) => setCategory(event.target.value);

    useEffect(() => {
      if (initialData) {
        setCategory(initialData.title);
      }
    }, [initialData])

    function categoryFormHandler(event) {
        event.preventDefault();
        const title = category.trim();
        
        if (title.length < 3) {
            toast.warning('The category must have at least 3 letters')
            return;
        }
        let bookCategory = {};
        if (initialData) {
          bookCategory = {...initialData, title: firstLetterUpperCase(title)};
        } else {
          bookCategory = { title: firstLetterUpperCase(title) };
        }

        onCategoryFormSubmit(bookCategory);
    }

  return (
    <div className={styles.categoriesFormWrapper}>
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
        
        <Button type="submit" className="mb-2">{initialData ? 'Save changes' : 'Create'}</Button>
      </div>
    </Form>
    </div>
  )
}

export default CategoriesForm;