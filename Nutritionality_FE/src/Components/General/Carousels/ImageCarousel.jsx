import { useImageCarousel } from './useImageCarousel';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { CgLoadbar } from 'react-icons/cg';
import Row from '../Flexboxes/Row/Row';
import './ImageCarousel.css';

function ImageCarousel({ images }) {
    const { currentImageIndex, MIN_IMAGE_COUNT, nextImageHandler, prevImageHandler, markerClickHandler } = useImageCarousel({ images });
    return (
        <>
            {images.length >= MIN_IMAGE_COUNT &&
                <div className="carousel">
                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevImageHandler} />
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextImageHandler} />
                    <Row styles='carousel-index-markers-container'>
                        {images.map((image, index) => (
                            <CgLoadbar
                                key={index}
                                className={`carousel-index-marker ${index === currentImageIndex && "active-marker"}`}
                                onClick={() => markerClickHandler(index)}
                            />
                        ))}
                    </Row>

                    {images.map((image, index) => (
                        currentImageIndex === index && (
                            <img
                                key={index}
                                src={image}
                                className="carousel-image"
                                alt="Carousel Item"
                            />
                        )))}
                </div>}
        </>
    );
}

export default ImageCarousel;
