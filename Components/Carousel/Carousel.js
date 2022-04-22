import styles from "../../public/assets/styles/Carousel.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselSystem({ children }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1380 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1380, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 478 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 478, min: 0 },
      items: 1
    }
  };
 return(
   <Carousel className={styles.Carousel} autoPlay={false} responsive={responsive} shouldResetAutoplay={true}>
  {children}
</Carousel>
  )
}
