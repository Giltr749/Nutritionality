import Col from "../../Components/General/Flexboxes/Column/Col";
import Row from "../../Components/General/Flexboxes/Row/Row";
import HomeInfo from "../../Components/Nutritionality/HomeInfo/HomeInfo";
import SearchForm from '../../Components/Nutritionality/SearchForm/SearchForm';
import SearchResults from '../../Components/Nutritionality/SearchResults/SearchResults';
import { useState } from "react";
import './HomePage.css';

function HomePage() {
    const [restaurantResults, setRestaurantResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const searchRestaurantsHandler = (restaurantResults) => {
        setRestaurantResults(restaurantResults);
    };

    const searchErrorHandler = (errorMessage) => {
        setErrorMessage(errorMessage);
    };

    return (
        <Col styles='home-page'>
            <Row styles="home-page-title">{'Nutritionality'}</Row>
            <HomeInfo />
            <SearchForm onSearchPets={searchRestaurantsHandler} onError={searchErrorHandler} />
            <SearchResults restaurants={restaurantResults} errorMessage={errorMessage} />
        </Col>
    );
}

export default HomePage;