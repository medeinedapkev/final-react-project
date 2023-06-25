import Container from '../../Components/Container/Container';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import styles from './CategoriesPage.module.css';
import axios from 'axios';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';


const CategpriesPage = () => {
  const [ categories, setCategories ] = useState(null);

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  }

  useEffect(() => {
    axios.get(`${API_URL}/categories`)
    .then(res => setCategories(res.data))
    .catch(err => toast.error(err.message));
  }, [])

  if (!categories) {
    return;
  }

  const title = categories.length > 0 ? 'Žanrai:' : 'Nėra žanrų'

  return (
    <Container>
    <div className={styles.titleWrapper}>
      <h1>{title}</h1>
      <Button onClick={}>Edit</Button>
    </div>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      {categories.map(category => (
            <ListItem disablePadding key={category.id}>
              <ListItemButton>
                <Link to={`/categories/${category.id}`} style={linkStyle}>
                <ListItemText primary={category.title} />
                </Link>
              </ListItemButton>
            </ListItem>
      ))}

    </List>
    </Container>
  )
}

export default CategpriesPage;