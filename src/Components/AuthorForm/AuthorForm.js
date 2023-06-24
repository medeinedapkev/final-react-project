import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './AuthorForm.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { firstLetterUpperCase } from '../Functions/Functions';

const AuthorForm = () => {
    const [ author, setAuthor ] = useState('');

    const authorHandler = (event) => setAuthor(event.target.value);

    function authorFormHandler(event) {
        event.preventDefault();
        const name = author.trim();

        if (name.length < 3) {
            toast.warning('The name must have at least 3 letters')
            return;
        }

        const newAuthor = { name: firstLetterUpperCase(name) }

        axios.post(`${API_URL}/authors`, newAuthor)
        .then(res => {
            setAuthor('');
            toast.success('New author was successfully created');
        }).catch(err => toast.error(err.message))
    }

  return (
    <div className={styles.authorsFormWrapper}>
    <h2 className={styles.formTitle}>Create new author:</h2>
    <Form onSubmit={authorFormHandler}>
      <div className={styles.formControl}>
         <Form.Label htmlFor="authorInput" visuallyHidden>Author: </Form.Label>
           <Form.Control
           className="mb-2"
           id="authorInput"
           placeholder="Author's name and surname"
           value={author}
           onChange={authorHandler}
           />
        
        <Button type="submit" className="mb-2">Submit</Button>
      </div>
    </Form>
    </div>
  )
}

export default AuthorForm;