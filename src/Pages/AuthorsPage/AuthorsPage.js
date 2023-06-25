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

  useEffect(() => {})
  return (
    <Container>
          <h1>{title}</h1>
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

export default AuthorsPage;