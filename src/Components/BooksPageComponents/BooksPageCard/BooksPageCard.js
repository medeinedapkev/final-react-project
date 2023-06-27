import styles from './BooksPageCard.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const BooksPageCard = ({ data }) => {
    const navigator = useNavigate();

    const toBookPage = (id) => navigator(`/books/${id}`);

  return (
    <div className={styles.cardWrapper}>
        {data.map(book => (
        <Card key={book.id} style={{ width: '13rem' }}>
          <div className={styles.ImgWrapper}>
            <img className={styles.photo} src={book.photo.url} alt={book.photo.title} />
          </div>
          
          <Card.Body>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author.name}</Card.Text>
              </div>

              <Button variant="primary" onClick={() => toBookPage(book.id)}>See the book</Button>
            </div>
          </Card.Body>
        </Card>
        ))}
    </div>
  )
}

export default BooksPageCard;