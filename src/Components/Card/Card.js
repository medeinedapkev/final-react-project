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
    <Card key={book.id} style={{ width: '13rem' }}>
      <div className={styles.ImgWrapper}>
        <img className={styles.photo} src={book.photo.url} alt={book.photo.title} />
      </div>

      <Card.Body>
        <div className={styles.cardInfo}>
          <div className={styles.cardTitle}>
            <Card.Title>{book.title}</Card.Title>
          </div>

          <Button variant="primary" onClick={() => toBookPage(book.id)}>See the book</Button>
        </div>
      </Card.Body>
    </Card>
    ))}
  </div>
  )
}

export default CategoryCard;