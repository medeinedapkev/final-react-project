import styles from './CategoriesPage.module.css';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import Container from '../../Components/Container/Container';

const CategpriesPage = () => {
  const [ categories, setCategories ] = useState(null);

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  useEffect(() => {
    axios.get(`${API_URL}/categories`)
    .then(res => setCategories(res.data))
    .catch(err => toast.error(err.message));
  }, [])

  if (!categories) {
    return;
  }

  const title = categories.length > 0 ? 'Žanrai:' : 'Nėra žanrų';

  return (
    <Container>
      <h1 className={styles.title}>{title}</h1>
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