import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdministratorButton = ({ toCreate, toEdit, id }) => {
    const navigator = useNavigate();

    const deleteHandler = () => {
        axios.delete(`${API_URL}/books/${id}`)
        .then(res => {
          navigator('/books');
          toast.warning('Book was successfully deleted');
        }).catch(err => toast.error(err.message));
      }

    const createHandler = () => navigator(toCreate);
    const editHandler = () => navigator(toEdit);

  return (
  <DropdownButton id="dropdown-basic-button" title="For Administrator">
    <Dropdown.Item onClick={deleteHandler}>Delete</Dropdown.Item>
    <Dropdown.Item onClick={createHandler}>Create</Dropdown.Item>
    <Dropdown.Item onClick={editHandler}>Edit</Dropdown.Item>
  </DropdownButton>
  )
}

export default AdministratorButton;