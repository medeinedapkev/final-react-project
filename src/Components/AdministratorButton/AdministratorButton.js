import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';

const AdministratorButton = ({ toCreate, toEdit, Delete, navigateTo, deleteToast }) => {
    const navigator = useNavigate();

    const deleteHandler = () => {
        axios.delete(`${API_URL}${Delete}`)
        .then(res => {
          navigator(navigateTo);
          toast.warning(deleteToast);
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