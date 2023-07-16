import styles from './BookForm.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { firstLetterUpperCase } from '../Functions/Functions';

const BookForm = ({ onBookFormSubmit, initialData }) => {
  const [ categories, setCategories ] = useState(null);
  const [ authors, setAuthors ] = useState(null);

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ publisher, setPublisher ] = useState('');
  const [ authorId, setAuthorId ] = useState('');
  const [ categoryId, setCategoryId ] = useState('');
  const [ year, setYear ] = useState('');
  const [ pages, setPages ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ urlAlt, setUrlAlt ] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/categories`)
    .then(res => {
      setCategories(res.data);
      if (!initialData) {
        setCategoryId(res.data[0].id);
      }
    }).catch(err => toast.error(err.message));
  }, [initialData])

  useEffect(() => {
    axios.get(`${API_URL}/authors`)
    .then(res => {
      setAuthors(res.data);
      if (!initialData) {
        setAuthorId(res.data[0].id);
      }
    }).catch(err => toast.error(err.message));
  }, [initialData])

  const titleHandler = (event) => setTitle(event.target.value);
  const descriptionHandler = (event) => setDescription(event.target.value);
  const publisherHandler = (event) => setPublisher(event.target.value);
  const categoryHandler = (event) => setCategoryId(event.target.value);
  const authorHandler = (event) => setAuthorId(event.target.value);
  const yearHandler = (event) => setYear(event.target.value);
  const pagesHandler = (event) => setPages(event.target.value);
  const urlHandler = (event) => setUrl(event.target.value);
  const urlAltHandler = (event) => setUrlAlt(event.target.value);

  useEffect(() => {
    if (initialData) {
        setTitle(initialData.title);
        setDescription(initialData.description);
        setPublisher(initialData.publisher);
        setAuthorId(initialData.authorId);
        setCategoryId(initialData.categoryId);
        setYear(initialData.year);
        setPages(initialData.pages);
        setUrlAlt(initialData.photo.title);
        setUrl(initialData.photo.url);
    }
  }, [initialData])

  function bookFormHandler(event) {
    event.preventDefault();

    const bookTitle = firstLetterUpperCase(title.trim());
    const bookDescription = firstLetterUpperCase(description.trim());
    const bookPublisher = firstLetterUpperCase(publisher.trim());
    const bookUrlAlt = firstLetterUpperCase(urlAlt.trim());
    const bookUrl = url.trim();

    if (bookTitle.length < 3) {
      toast.error('Title must have at least 3 letters');
    }

    if (bookDescription.length < 15) {
      toast.error('Description must have at least 15 letters');
    }

    if (bookPublisher.length < 3) {
      toast.error('Publisher must have at least 3 letters');
    }

    if (year.length < 4 || year.length > 4) {
      toast.error('Year must have 4 numbers');
    }

    if (pages.length < 2) {
      toast.error('Pages must have at least 2 numbers');
    }

    if (bookUrlAlt.length < 5) {
      toast.error('Description about photo must have at least 5 letters');
    }

    if (bookUrl.length < 10) {
      toast.error('url must have at least 10 symbols');
    }
  
    if (bookTitle.length < 3 || bookDescription.length < 15 || bookPublisher.length < 3 || year.length < 4 || year.length > 4 || pages.length < 2 || bookUrlAlt.length < 5 || bookUrl.length < 10) {
      return;
    }

    let book = {};

    if (initialData) {
      book = {...initialData,
        title: bookTitle,
        description: bookDescription,
        publisher: bookPublisher,
        year: Number(year),
        pages: Number(pages),
        authorId: Number(authorId),
        categoryId: Number(categoryId),
        photo: {...initialData.photo,
          title: bookUrlAlt,
          url: bookUrl
        }
      };

    } else {
      book = {
        title: bookTitle,
        description: bookDescription,
        publisher: bookPublisher,
        year: Number(year),
        pages: Number(pages),
        authorId: Number(authorId),
        categoryId: Number(categoryId),
        photo: {
          title: bookUrlAlt,
          url: bookUrl
        }
      };
    }
    
    onBookFormSubmit(book);
  }

  if (!categories || !authors) {
    return;
  }

  return (
    <div className={styles.bookFormWrapper}>
      <h2 className={styles.formTitle}>{initialData ? 'Edit book:' : 'Create new book:'}</h2>
      <Form onSubmit={bookFormHandler}>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="bookTitleInput">Book title:</Form.Label>
          <Form.Control 
          id='bookTitleInput'
          placeholder='Book title'
          value={title}
          onChange={titleHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="bookDescriptionInput">Book description:</Form.Label>
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
          <Form.Label htmlFor="bookPublisherInput" >Publisher:</Form.Label>
          <Form.Control
          id='bookPublisherInput' 
          placeholder="Publisher"
          value={publisher}
          onChange={publisherHandler}
          />
        </Form.Group>

        <Row className="mb-3" xs='auto'>
          <Form.Group as={Col} >
            <Form.Label htmlFor="bookCategorySelect">Category:</Form.Label>
            <Form.Select id="bookCategorySelect" value={categoryId} onChange={categoryHandler}>
              {categories.map(category => <option key={category.id} value={category.id}> {category.title}</option>)}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label htmlFor="bookAuthorSelect">Author:</Form.Label>
            <Form.Select id="bookAuthorSelect" value={authorId} onChange={authorHandler}>
              {authors.map(author => <option key={author.id} value={author.id}>{author.id}. {author.name}</option>)}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3" xs='auto'>
          <Form.Group as={Col} >
            <Form.Label htmlFor="bookYearInput" >Year of release:</Form.Label>
            <Form.Control
            id='bookYearInput' 
            placeholder="Year of release"
            type='number'
            value={year}
            onChange={yearHandler}
            />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label htmlFor="bookPagesInput" >Pages:</Form.Label>
            <Form.Control
            id='bookPagesInput' 
            placeholder="Pages"
            type='number'
            value={pages}
            onChange={pagesHandler}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="bookPhotoTitleInput" >Write something about photo:</Form.Label>
          <Form.Control
          id='bookPhotoTitleInput' 
          placeholder="Write something about photo:"
          value={urlAlt}
          onChange={urlAltHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="bookPhotoInput" >Photo url:</Form.Label>
          <Form.Control
          id='bookPhotoInput' 
          placeholder="Photo url"
          type='url'
          value={url}
          onChange={urlHandler}
          />
        </Form.Group>

        <Button variant="primary" type="submit">{initialData ? 'Save changes' : 'Create a book'}</Button>
    </Form>
  </div>        
  )
}

export default BookForm;