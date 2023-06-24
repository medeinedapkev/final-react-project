import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './BookForm.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';

const BookForm = () => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ publisher, setPublisher ] = useState('');
  const [ categories, setCategories ] = useState(null);
  const [ authors, setAuthors ] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/categories`)
    .then(res => setCategories(res.data))
    .catch(err => toast.error(err.message));
  }, [])

  useEffect(() => {
    axios.get(`${API_URL}/authors`)
    .then(res => setAuthors(res.data))
    .catch(err => toast.error(err.message));
  }, [])

  const titleHandler = (event) => setTitle(event.target.value);
  const descriptionHandler = (event) => setDescription(event.target.value);
  const publisherHandler = (event) => setPublisher(event.target.value);
  const categoryHandler = (event) => setCategories(event.target.value);
  const authorHandler = (event) => setAuthors(event.target.value);

  if (!categories || !authors) {
    return;
  }

  return (
    <div className={styles.bookFormWrapper}>
      <h2 className={styles.formTitle}>Create new book:</h2>
    <Form>
    <Form.Group className="mb-3" >
      <Form.Label htmlFor="bookTitleInput" visuallyHidden>Book title:</Form.Label>
      <Form.Control 
      id='bookTitleInput'
      placeholder="Book title"
      value={title}
      onChange={titleHandler}
      />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label htmlFor="bookDescriptionInput" visuallyHidden>Book description:</Form.Label>
      <Form.Control 
      id='bookDescriptionInput' 
      placeholder="Book description"
      as="textarea"
      style={{ height: '100px' }}
      value={description}
      onChange={descriptionHandler}
      />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label htmlFor="bookPublisherInput" visuallyHidden>Publisher:</Form.Label>
      <Form.Control
      id='bookPublisherInput' 
      placeholder="Publisher"
      value={publisher}
      onChange={publisherHandler}
       />
    </Form.Group>

    <Row className="mb-3" xs='auto'>
      <Form.Group as={Col} >
        <Form.Label>Author:</Form.Label>
        <Form.Select >
          {categories.map(category => <option key={category.id} value={category.id} onChange={categoryHandler}>{category.title}</option>)}
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} >
        <Form.Label>Category:</Form.Label>
        <Form.Select >
          {authors.map(author => <option key={author.id} value={author.id} onChange={authorHandler}>{author.name}</option>)}
        </Form.Select>
      </Form.Group>
    </Row>

    <Row className="mb-3" xs='auto'>
      <Form.Group as={Col} >
        <Form.Label >City</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} >
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} >
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>


    <Button variant="primary" type="submit">Submit</Button>
  </Form>
  </div>
            
  )
}

export default BookForm;