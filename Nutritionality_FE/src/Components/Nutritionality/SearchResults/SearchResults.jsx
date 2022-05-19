import Col from '../../General/Flexboxes/Column/Col';
import Row from '../../General/Flexboxes/Row/Row';
import '../../../Styles/general.css';
import './SearchResults.css';

function SearchResults({ restaurants, errorMessage }) {
    return (
        <Col styles='search-results-container'>
            <>
                {errorMessage ?
                    <Row styles='nothing-found-message'>
                        <>{errorMessage}</>
                    </Row>
                    :
                    !restaurants ?
                        <Row styles='nothing-found-message'>
                            <>{"No results found..."}</>
                        </Row>
                        :
                        <Row styles='search-results-inner-container'>
                            {restaurants.map((restaurant, index) => (
                                <Col styles='search-restaurant-result-container'>
                                    <Row styles="restaurant-name"></Row>
                                    <Row styles="restaurant-meal"></Row>
                                </Col>
                            ))}
                        </Row>}
            </>
        </Col >
    );
}

export default SearchResults;