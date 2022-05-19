import * as constants from '../../../Utils/Constants/constants';
import { useSearchForm } from './useSearchForm';
import Row from '../../General/Flexboxes/Row/Row';
import Col from '../../General/Flexboxes/Column/Col';
import NutritionalityTitle from '../../General/Title/NutritionalityTitle';
import GeneralButton from '../../General/Buttons/GeneralButton/GeneralButton.jsx';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import './SearchForm.css';

function SearchForm({ onSearchRestaurants, onError }) {
    const {
        protein,
        carbohydrates,
        sodium,
        cholesterol,
        totalFat,
        calories,
        isError,
        isLoading,
        errorMessage,
        proteinChangeHandler,
        carbohydratesChangeHandler,
        sodiumChangeHandler,
        cholesterolChangeHandler,
        totalFatChangeHandler,
        caloriesChangeHandler,
        getSubmitButtonWording,
        searchRestaurantsHandler
    } = useSearchForm({ onSearchRestaurants, onError });

    return (
        <Col styles='search-form-container'>
            <Row styles='title-container'>
                <NutritionalityTitle
                    styles={constants.NUTRITIONALITY_TITLE_STYLES}
                    wording={constants.SEARCH_FORM_WORDING}
                />
            </Row>
            <form className="search-form flex-col" onSubmit={searchRestaurantsHandler}>
                <Col styles='dish-params-container'>
                    <Row styles='dish-detail-pair-container'>
                        <Row styles='dish-detail'>
                            <Row styles="category"><>{`${constants.PROTEIN_WORDING}:`}</></Row>
                            <div className="answer">
                                <input
                                    type="number"
                                    max="999"
                                    value={protein}
                                    className="dish-detail-input"
                                    placeholder={"Protein"}
                                    onChange={(event) => proteinChangeHandler(event.target.value)}
                                />
                            </div>
                        </Row>
                        <Row styles='dish-detail'>
                            <Row styles="category"><>{`${constants.TOTAL_FAT_WORDING}:`}</></Row>
                            <div className="answer">
                                <input
                                    type="number"
                                    max="999"
                                    value={totalFat}
                                    className="dish-detail-input"
                                    placeholder={"Total Fat"}
                                    onChange={(event) => totalFatChangeHandler(event.target.value)}
                                />
                            </div>
                        </Row>
                    </Row>
                    <Row styles='dish-detail-pair-container'>
                        <Row styles='dish-detail'>
                            <Row styles="category"><>{`${constants.CHOLESTEROL_WORDING}:`}</></Row>
                            <div className="answer">
                                <input
                                    type="number"
                                    max="999"
                                    value={cholesterol}
                                    className="dish-detail-input"
                                    placeholder={"protein"}
                                    onChange={(event) => cholesterolChangeHandler(event.target.value)}
                                />
                            </div>
                        </Row>
                        <Row styles='dish-detail'>
                            <Row styles="category"><>{`${constants.CARBOHYDRATES_WORDING}:`}</></Row>
                            <div className="answer">
                                <input
                                    type="number"
                                    max="999"
                                    value={carbohydrates}
                                    className="dish-detail-input"
                                    placeholder={"protein"}
                                    onChange={(event) => carbohydratesChangeHandler(event.target.value)}
                                />
                            </div>
                        </Row>
                    </Row>
                    <Row styles='dish-detail-pair-container'>
                        <Row styles='dish-detail'>
                            <Row styles="category"><>{`${constants.SODIUM_WORDING}:`}</></Row>
                            <div className="answer">
                                <input
                                    type="number"
                                    max="999"
                                    value={sodium}
                                    className="dish-detail-input"
                                    placeholder={"protein"}
                                    onChange={(event) => sodiumChangeHandler(event.target.value)}
                                />
                            </div>
                        </Row>
                        <Row styles='dish-detail'>
                            <Row styles="category"><>{`${constants.CALORIES_WORDING}:`}</></Row>
                            <div className="answer">
                                <input
                                    type="number"
                                    max="999"
                                    value={calories}
                                    className="dish-detail-input"
                                    placeholder={"protein"}
                                    onChange={(event) => caloriesChangeHandler(event.target.value)}
                                />
                            </div>
                        </Row>
                    </Row>
                </Col>
                <Row styles='search-form-button-container'>
                    <GeneralButton
                        wording={constants.SEARCH_BUTTON_WORDING}
                        styles={constants.ENABLED_BUTTON_STYLE}
                        isDisabled={false}
                    />
                </Row>
                {isLoading &&
                    < Stack sx={{ color: 'silver' }} spacing={2} direction="row">
                        <CircularProgress color="inherit" />
                    </Stack>}
            </form>
        </Col >
    );
}

export default SearchForm;