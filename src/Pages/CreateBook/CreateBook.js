import AuthorForm from '../../Components/AuthorForm/AuthorForm';
import BookForm from '../../Components/BookForm/BookForm';
import Container from '../../Components/Container/Container';


const CreateBook = () => {
  return (
    <Container>
        <AuthorForm />
        <BookForm />
    </Container>
  )
}

export default CreateBook;