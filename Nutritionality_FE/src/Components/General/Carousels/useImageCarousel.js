import { useState } from 'react';

const MIN_IMAGE_COUNT = 2;

export function useImageCarousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImageHandler = () => {
        setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    };

    const prevImageHandler = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    };

    const markerClickHandler = (index) => {
        setCurrentImageIndex(index);
    };

    return {
        currentImageIndex,
        MIN_IMAGE_COUNT,
        nextImageHandler,
        prevImageHandler,
        markerClickHandler
    };
}