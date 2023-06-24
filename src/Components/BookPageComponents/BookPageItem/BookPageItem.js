import './BookPageItem.css'
import Card from 'react-bootstrap/Card';
import AdministratorButton from '../../AdministratorButton/AdministratorButton';

const BookPageItem = ({ data }) => {
  console.log(data)

  const bookImg = data.photos && data.photos.length > 0 && (
    data.photos.map(photo => (
      <div key={photo.id}>
          <img className='book-photo' src={photo.url} alt={photo.title} />
      </div>
  ))
  )

  return (
    <>
      <Card body>
        <div className='book-wrapper'>
          {bookImg}

          <div className='book-item'>
          <AdministratorButton toCreate='/books/create' toEdit='/books/edit' id={data.id} />

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