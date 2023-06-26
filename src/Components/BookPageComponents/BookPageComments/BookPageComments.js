import Button from 'react-bootstrap/Button';
import styles from './BookPageComments.module.css';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { API_URL } from '../../../config';
import axios from 'axios';
import { toast } from 'react-toastify';
import CommentForm from '../../CommentForm/CommentForm';

const BookPageComments = ({ data, bookId }) => {
    const [ commentForm, setCommentForm ] = useState(false);
    const [ editComment, setEditComment ] = useState(null);
    // const [ comments, setComments ] = useState(data);

    const commentFormHandler = (commentData) => {
        if (commentData) {
          setCommentForm(true);
          setEditComment(commentData);
        } else {
          setCommentForm(true);
        }
    }

    const deleteCommentHandler = (id) => {
        axios.delete(`${API_URL}/comments/${id}`)
        .then(res => {

        //   const removeCommentIndex = comments.findIndex(comment => comment.id === commentId);
        
        //   setComments(prevState => prevState.toSpliced(removeCommentIndex, 1));
          toast.success('Comment was successfully deleted');
        }).catch(err => toast.error(err.message));
      }

      function commentHandler(comment) {
        if (editComment) {
            axios.patch(`${API_URL}/comments/${comment.id}`, comment)
            .then(res => {
                setCommentForm(false);
                toast.success('Comment was successfully edited');
            }).catch(err => toast.error(err.message));
        } else {
            axios.post(`${API_URL}/comments`, comment)
            .then(res => {
                setCommentForm(false);
                toast.success('Comment was seccessfully created')
            }).catch(err => toast.error(err.message));
        }
      }


      const commentsFormElement = (
        <div className={styles.commentsForm}>
          <h3>{data.length > 0 ? 'Comments:' : 'No comments'}</h3>
          {commentForm ? (
          <CommentForm 
            bookId={bookId} 
            onCommentFormSubmit={commentHandler} 
            initialData={editComment} 
          />
          ) : (
            <div className={styles.buttonDiv}>
                <Button onClick={() => commentFormHandler()}>Comment</Button>
            </div>
          )}
        </div>)

  return (
    <div className={styles.commentsWrapper}>
    {commentsFormElement}
        
    {data.map(comment => (
    <Card key={comment.id}>
      <Card.Body>
        <div className={styles.titleWrapper}>
          <h3 className={styles.user}>{comment.user}</h3>
          <div className={styles.buttonsWrapper}>
            <Button onClick={() => commentFormHandler(comment)} variant="warning" size="sm">Edit</Button>
            <Button onClick={() => deleteCommentHandler(comment.id)} variant="danger" size="sm">Delete</Button>
          </div>
        </div>
          <p>{comment.title}</p>
          <span className={styles.date}>{comment.date}</span>
        </Card.Body>
    </Card>
    ))}
    </div>
  )
}

export default BookPageComments;