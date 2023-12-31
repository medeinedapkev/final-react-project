import styles from './BookPageItem.module.css';
import Card from 'react-bootstrap/Card';
import AdministratorButton from '../../AdministratorButton/AdministratorButton';

const BookPageItem = ({ data }) => {

  return (
      <Card body>
        <div className={styles.bookWrapper}>
          <div className={styles.photoWrapper}>
            <img className={styles.bookPhoto} src={data.photo.url} alt={data.photo.title} />
          </div>

          <div className={styles.bookMainInfo}>
              <div className={styles.administratorButtonWrapper}>
                <span className={styles.bookAuthor}>{data.author.name}</span>

                <AdministratorButton 
                size="sm"
                toCreate='/books/create' 
                toEdit={`/books/edit/${data.id}`} 
                Delete={`/books/${data.id}`}
                navigateTo='/books'
                deleteToast='Book was successfully deleted'
                />
              </div>

              <div className={styles.bookInfo}>
                <h2 className={styles.bookTitle}>{data.title}</h2>

                <ul className={styles.bookListInfo}>
                  <li><span className={styles.listTitles}>Žanras:</span> {data.category.title}</li>
                  <li><span className={styles.listTitles}>Leidėjas:</span> {data.publisher}</li>
                  <li><span className={styles.listTitles}>Išleidimo metai:</span> {data.year}</li>
                  <li><span className={styles.listTitles}>Puslapiai:</span> {data.pages}</li>
                </ul>
              </div>
          </div>

          <div className={styles.bookDescriptionWrapper}>
            <p className={styles.bookDescription}>{data.description}</p>
          </div>
        </div>
      </Card>
  )
}

export default BookPageItem;