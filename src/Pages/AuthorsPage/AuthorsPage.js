import Container from '../../Components/Container/Container'
import { useEffect, useState } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import axios from 'axios';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AuthorsPage = () => {
  const [ authors, setAuthors ] = useState(null);

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  }

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
          <h1>{title}</h1>
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