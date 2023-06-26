import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './BookPageComments.module.css';
import { useState } from 'react';
import { API_URL } from '../../../config';
import axios from 'axios';
import { toast } from 'react-toastify';
import CommentForm from '../../CommentForm/CommentForm';

const BookPageComments = ({ data, bookId }) => {
    const [ commentForm, setCommentForm ] = useState(false);
    const [ editComment, setEditComment ] = useState(null);
    const [ comments, setComments ] = useState(data);

    const commentFormHandler = (commentData) => {
        if (commentData) {
          setCommentForm(true);
          setEditComment(commentData);
        } else {
          setCommentForm(true);
        }
    }

    const deleteCommentHandler = (commentId) => {
        axios.delete(`${API_URL}/comments/${commentId}`)
        .then(res => {
          const removeCommentIndex = comments.findIndex(comment => comment.id === commentId);
          setComments(prevState => prevState.toSpliced(removeCommentIndex, 1));
          toast.success('Comment was successfully deleted');
        }).catch(err => toast.error(err.message));
      }

      function commentHandler(comment) {
        if (editComment) {
            const editCommentId = comment.id;

            axios.patch(`${API_URL}/comments/${editCommentId}`, comment)
            .then(res => {
                setCommentForm(false);
                const editCommentIndex = comments.findIndex(comment => comment.id === editCommentId);
                setComments(prevState => prevState.toSpliced(editCommentIndex, 1, res.data));
                toast.success('Comment was successfully edited');
            }).catch(err => toast.error(err.message));

        } else {
            axios.post(`${API_URL}/comments`, comment)
            .then(res => {
                setCommentForm(false);
                setComments(prevState => [res.data, ...prevState]);
                toast.success('Comment was seccessfully created');
            }).catch(err => toast.error(err.message));
        }
      }

      const commentsFormElement = (
        <div className={styles.commentsForm}>
          <h3 className={styles.title}>{comments.length > 0 ? 'Comments:' : 'No comments'}</h3>
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
        
    {comments.map(comment => (
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