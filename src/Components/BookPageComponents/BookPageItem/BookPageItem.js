import './BookPageItem.css'
import Card from 'react-bootstrap/Card';
import AdministratorButton from '../../AdministratorButton/AdministratorButton';

const BookPageItem = ({ data }) => {

  return (
    <>
      <Card body>
        <div className='book-wrapper'>
          <div>
            <img className='book-photo' src={data.photo.url} alt={data.photo.title} />
          </div>

          <div className='book-item'>
          <AdministratorButton 
          toCreate='/books/create' 
          toEdit={`/books/edit/${data.id}`} 
          Delete={`/books/${data.id}`}
          navigateTo='/books'
          deleteToast='Book was successfully deleted'
          />

            <span className='book-author'>{data.author.name}</span>
            <h2 className='book-title'>{data.title}</h2>

            <ul className='book-info'>
              <li><span>Žanras:</span> {data.category.title}</li>
              <li><span>Leidėjas:</span> {data.publisher}</li>
              <li><span>Išleidimo metai:</span> {data.year}</li>
              <li><span>Puslapiai:</span> {data.pages}</li>
            </ul>

            <p className='book-description'>{data.description}</p>
          </div>

        </div>
      </Card>
    </>
  )
}

export default BookPageItem;