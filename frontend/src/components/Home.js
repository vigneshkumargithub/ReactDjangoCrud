import slide01 from '../static/slide01.jpg'
import slide02 from '../static/Slide02.jpg'
import slide03 from '../static/Slide03.jpg'
import slide04 from '../static/Slide04.jpg'
import slide05 from '../static/Slide05.jpg'
import slide06 from '../static/Slide06.jpg'


import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
  <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide03}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide01}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide02}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide04}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide06}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide05}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;