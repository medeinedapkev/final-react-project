import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';


const CategoryCard = ({ data}) => {
    const navigator = useNavigate();
    console.log(data)
    const toBookPage = (id) => navigator(`/books/${id}`)

  return (
    <div className={styles.cardWrapper}>
    {data.books.map(book => ( 
    <Card key={book.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.photo.url} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button variant="primary" onClick={() => toBookPage(book.id)}>See the book</Button>
        </Card.Body>
    </Card>
    ))}
  </div>
  )
}

export default CategoryCard;