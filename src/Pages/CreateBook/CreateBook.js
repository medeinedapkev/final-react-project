import AuthorForm from '../../Components/AuthorForm/AuthorForm';
import BookForm from '../../Components/BookForm/BookForm';
import CategoriesForm from '../../Components/CategoriesForm/CategoriesForm';
import Container from '../../Components/Container/Container';


const CreateBook = () => {
  return (
    <Container>
        <AuthorForm />
        <CategoriesForm />
        <BookForm />
    </Container>
  )
}

export default CreateBook;