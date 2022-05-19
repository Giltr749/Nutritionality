import * as constants from '../../../Utils/Constants/constants';
import ImageBubble from '../../General/ImageBubble/ImageBubble';
import GeneralButton from '../../General/Buttons/GeneralButton/GeneralButton.jsx';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Col from '../../General/Flexboxes/Column/Col';
import Row from '../../General/Flexboxes/Row/Row';
import { styled } from '@mui/material/styles';
import { useDishForm } from './useDishForm';
import '../../../Styles/general.css';
import './DishForm.css';

// MUI Styling
const Input = styled('input')({ display: 'none' });
const INPUT_OVERRIDE_STYLES = { backgroundColor: 'var(--theme-purple)', '&:hover': { backgroundColor: 'white', color: 'var(--theme-purple)', border: '1px solid var(--theme-purple)' } };

DishForm.defaultProps = {
    dish: {
        nf_protein: 0,
        nf_total_carbohydrate: 0,
        nf_sodium: 0,
        nf_cholesterol: 0,
        nf_total_fat: 0,
        nf_calories: 0,
    },
};

function DishForm({ dish, formActionType, onChangePetInfo }) {
    const {
        name,
        protein,
        carbohydrates,
        sodium,
        cholesterol,
        totalFat,
        calories,
        imageUpload,
        imageUploadRef,
        isError,
        isLoading,
        errorMessage,
        isSuccessfulUpdate,
        nameChangeHandler,
        proteinChangeHandler,
        carbohydratesChangeHandler,
        sodiumChangeHandler,
        cholesterolChangeHandler,
        totalFatChangeHandler,
        caloriesChangeHandler,
        addOrEditDishHandler,
        imageUploadChangeHandler,
        getSubmitButtonWording
    } = useDishForm({ dish, formActionType, onChangePetInfo });

    return (
        <Col styles='dish-form-container' >
            <form className='dish-form flex-col' onSubmit={addOrEditDishHandler}>
                <Row styles='dish-image-upload-container'>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label htmlFor="contained-button-file">
                            <Input
                                id="contained-button-file"
                                type="file"
                                accept="image/*"
                                ref={imageUploadRef}
                                onChange={imageUploadChangeHandler}
                            />
                            <Button
                                variant="contained"
                                component="span"
                                sx={INPUT_OVERRIDE_STYLES}>
                                {'Upload'}
                            </Button>
                        </label>
                    </Stack>
                    <Row styles='image-bubble-wrapper'>
                        <ImageBubble
                            styles='image-upload-preview'
                            borderRadius={50}
                            imageURL={imageUpload}
                        />
                    </Row>
                </Row>
                <Col styles='dish-info-container'>
                    <Row styles='dish-detail-pair-container'>
                        <Row styles='dish-detail'>
                            <Row styles="category"><>{`${constants.DISH_NAME_WORDING}:`}</></Row>
                            <div className="answer">
                                <input
                                    type="text"
                                    maxlength={30}
                                    value={name}
                                    className="dish-detail-input"
                                    placeholder={constants.DISH_NAME_WORDING}
                                    onChange={(event) => nameChangeHandler(event.target.value)}
                                />
                            </div>
                        </Row>
                    </Row>
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
                            <Row styles="category"><>{`${constants.CHOLESTEROL_WORDING} (cm):`}</></Row>
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
                            <Row styles="category"><>{`${constants.CARBOHYDRATES_WORDING} (kg):`}</></Row>
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
                            <Row styles="category"><>{`${constants.SODIUM_WORDING} (cm):`}</></Row>
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
                            <Row styles="category"><>{`${constants.CALORIES_WORDING} (kg):`}</></Row>
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
                <Row styles='add-dish-button-wrapper'>
                    <GeneralButton
                        wording={getSubmitButtonWording()}
                        isDisabled={false}
                    />
                </Row>
                <Row styles="dish-form-conditional-messaging-container">
                    <>
                        {isLoading &&
                            < Stack sx={{ color: 'silver' }} spacing={2} direction="row">
                                <CircularProgress color="inherit" />
                            </Stack>}
                        {isSuccessfulUpdate &&
                            < Alert severity="success">
                                {constants.UPDATE_SUCCESS_MESSAGE}
                            </Alert>}
                        {isError &&
                            < Alert severity="error">
                                {errorMessage}
                            </Alert>}
                    </>
                </Row>
            </form>
        </Col >
    );
}

export default DishForm;