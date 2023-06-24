import './BookPageItem.css'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { API_URL } from '../../../config';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BookPageItem = ({ data }) => {
  const navigator = useNavigate()
  console.log(data)

  const deleteHandler = (id) => {
    axios.delete(`${API_URL}/books/${id}`)
    .then(res => {
      navigator('/books');
      toast.warning('Book was successfully deleted');
    }).catch(err => toast.error(err.message));
  }

  const createHandler = () => navigator('/books/create');
  const editHandler = () => navigator('/books/edit');

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
            <DropdownButton id="dropdown-basic-button" title="For Administrator">
              <Dropdown.Item onClick={() => deleteHandler(data.id)}>Delete</Dropdown.Item>
              <Dropdown.Item onClick={createHandler}>Create</Dropdown.Item>
              <Dropdown.Item onClick={editHandler}>Edit</Dropdown.Item>
            </DropdownButton>

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