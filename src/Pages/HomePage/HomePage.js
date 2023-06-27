import styles from './HomePage.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from '../../Components/Container/Container';

const HomePage = () => {
  const mainLabel1 = 'Knygos visų skoniui!';
  const mainLabel2 = 'Knygos visų skoniui!';
  const mainLabel3 = 'Knygos visų skoniui!';

  const secondLabel1 = 'Nulla vitae elit libero, a pharetra augue mollis interdum.';
  const secondLabel2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const secondLabel3 = 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.';

  return (
  <Container>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className={styles.imgWrapper}>
        <img
          className={`${styles.photo} + "d-block w-100"`}
          src="https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/a9f0d2aa-fb75-4bb5-8a09-d4cf3e77991c/Best%20literary%20fiction%20of%202022%20-%20Header%20-%20FIC.jpg"
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h5>{mainLabel1}</h5>
          <p>{secondLabel1}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className={styles.imgWrapper}>
        <img
          className={`${styles.photo} + "d-block w-100"`}
          src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4fc31a0e-4ebf-11ec-9bc6-5abf98655bc4.jpg?crop=1500%2C1000%2C0%2C0"
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h5>{mainLabel2}</h5>
          <p>{secondLabel2}.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className={styles.imgWrapper}>
        <img
          className={`${styles.photo} + "d-block w-100"`}
          src="https://www.realsimple.com/thmb/KrGb42aamhHKaMzWt1Om7U42QsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-books-for-anytime-2000-4ff4221eb1e54b659689fef7d5e265d5.jpg"
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          <h5>{mainLabel3}</h5>
          <p>{secondLabel3}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
  )
}

export default HomePage;