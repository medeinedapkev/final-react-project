import styles from './AuthorsPage.module.css';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import Container from '../../Components/Container/Container'

const AuthorsPage = () => {
  const [ authors, setAuthors ] = useState(null);

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  useEffect(() => {
    axios.get(`${API_URL}/authors`)
    .then(res => setAuthors(res.data))
    .catch(err => toast.error(err.message));
  }, [])

  if (!authors) {
    return;
  }

  const title = authors.length > 0 ? 'Knygų autoriai:' : 'Nėra knygų autorių'

  return (
    <Container>
      <h1 className={styles.title}>{title}</h1>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
      >
        {authors.map(author => (
          <ListItem disablePadding key={author.id}>
            <ListItemButton>
              <Link to={`/authors/${author.id}`} style={linkStyle}>
              <ListItemText primary={author.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}

    </List>
  </Container>
  )
}

export default AuthorsPage;