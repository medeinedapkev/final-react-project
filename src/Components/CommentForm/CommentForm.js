import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './CommentForm.module.css';
import { toast } from 'react-toastify';


const CommentForm = ({ bookId, onCommentFormSubmit, initialData }) => {
    const [ title, setTitle ] = useState('');
    const [ user, setUser ] = useState('');
    const [ date, setDate ] = useState('');
    console.log(initialData)

    const userHandler = (event) => setUser(event.target.value);
    const titleHandler = (event) => setTitle(event.target.value);
    const dateHandler = (event) => setDate(event.target.value);

    useEffect(() => {
        if (initialData) {
            setUser(initialData.user);
            setTitle(initialData.title);
            setDate(initialData.date);
        }
    }, [initialData])
    function commentFormHandler(event) {
        event.preventDefault();
        console.log('veikia');
        console.log(user)
        console.log(title)
        console.log(date.length)
        console.log(bookId)

        const usersName = user.trim();
        const commentTitle = title.trim();

        if (usersName.length < 2) {
            toast.error('You have to write something');
        }

        if (commentTitle.length < 3) {
            toast.error('Comment must have at least 3 letters')
        }

        if (date.length === 0) {
            toast.error('You have to choose date');
        }

        if (usersName.length < 2 || title.length < 3 || date.length === 0) {
            return;
        }

        let comment = {};

        if (initialData) {
            comment = {...initialData, 
                title: commentTitle,
                user: usersName,
                date,
                bookId: Number(bookId)
            }
        } else {
            comment = {
                title: commentTitle,
                user: usersName,
                date,
                bookId: Number(bookId)
            }
        }


        onCommentFormSubmit(comment)
    }

  return (
      
    <Form onSubmit={commentFormHandler}>
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="commentInput" visuallyHidden>Comment: </Form.Label>
           <Form.Control
           as="textarea"
           className="mb-2"
           id="commentInput"
           placeholder="Comment"
           value={title}
           onChange={titleHandler}
           />
        </Form.Group>
           
        <Row xs='auto'>
        <Form.Group  >
        <Form.Label htmlFor="usernameInput" visuallyHidden>User: </Form.Label>
           <Form.Control
           className="mb-2"
           id="usernameInput"
           placeholder="Username"
           value={user}
           onChange={userHandler}
           />
        </Form.Group>

        <Form.Group  >
           <Form.Label htmlFor="dateInput" visuallyHidden>Date: </Form.Label>
              <Form.Control
                className="mb-2"
                id="dateInput"
                value={date}
                onChange={dateHandler}
                type="date"
              />
        </Form.Group>
          <Button type="submit" className="mb-2">{initialData ? 'Save changes' : 'Comment'}</Button>
        </Row>

    </Form>
      
  )
}

export default CommentForm;