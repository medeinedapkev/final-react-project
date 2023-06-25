import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './BooksPageCard.module.css';
import { useNavigate } from 'react-router-dom';

const BooksPageCard = ({ data }) => {
    const navigator = useNavigate();
    console.log(data)
    const toBookPage = (id) => navigator(`/books/${id}`)

  return (
    <div className={styles.cardWrapper}>
        {data.map(book => (
        <Card key={book.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={book.photo.url} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                    {book.author.name}
              </Card.Text>
              <Button variant="primary" onClick={() => toBookPage(book.id)}>See the book</Button>
            </Card.Body>
        </Card>
        ))}
    </div>
  )
}

export default BooksPageCard;