import styles from './AuthorForm.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { firstLetterUpperCase } from '../Functions/Functions';

const AuthorForm = ({ onAuthorFormSubmit, initialData }) => {
    const [ author, setAuthor ] = useState('');

    const authorHandler = (event) => setAuthor(event.target.value);

    useEffect(() => {
      if (initialData) {
        setAuthor(initialData.name);
      }
    }, [initialData])

    function authorFormHandler(event) {
        event.preventDefault();
        const name = author.trim();

        if (name.length < 3) {
            toast.error('The name must have at least 3 letters');
            return;
        }

        let booksAuthor = {};

        if (initialData) {
          booksAuthor = {...initialData, name: firstLetterUpperCase(name) };
        } else {
          booksAuthor = { name: firstLetterUpperCase(name) };
        }

        onAuthorFormSubmit(booksAuthor);
    }

  return (
  <div className={styles.authorsFormWrapper}>
    <h2 className={styles.formTitle}>{initialData ? 'Edit author:' : 'Create new author:'}</h2>

    <Form onSubmit={authorFormHandler}>
      <div className={styles.formControl}>
        <Form.Group className="mb-2" as={Col} >
          <Form.Label htmlFor="authorInput" visuallyHidden>Author: </Form.Label>
            <Form.Control
            className="mb-2"
            id="authorInput"
            placeholder="Author's name and surname"
            value={author}
            onChange={authorHandler}
            />
          </Form.Group>

          <Button type="submit" className="mb-2">{initialData ? 'Save changes' : 'Create'}</Button>
      </div>
    </Form>
  </div>
  )
}

export default AuthorForm;