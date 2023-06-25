import styles from './BooksPageSideMenu.module.css';
import ListGroup from 'react-bootstrap/ListGroup';

const BooksPageSideMenu = () => {
  return (
    <div className={styles.sideMenuWrapper}>
    <ListGroup>
      <ListGroup.Item action variant="primary">This</ListGroup.Item>
      <ListGroup.Item action variant="primary">ListGroup</ListGroup.Item>
      <ListGroup.Item action variant="primary">renders</ListGroup.Item>
      <ListGroup.Item action variant="primary">horizontally!</ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default BooksPageSideMenu;