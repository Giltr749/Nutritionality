import * as constants from "../../../Utils/Constants/constants";
import { useState } from 'react';
import NutritionalityTitle from '../../General/Title/NutritionalityTitle';
import Col from '../../General/Flexboxes/Column/Col';
import Row from '../../General/Flexboxes/Row/Row';
import MUIModal from '../../General/Modals/MUIModal';
import DishForm from '../DishForm/DishForm';
import './Dashboard.css';

function Dashboard({ dishes, onChangePetInfo }) {
    const [dishToInspect, setDishToInspect] = useState();
    const [formInModal, setFormInModal] = useState(null);

    const openModalHandler = (dish) => {
        setFormInModal(constants.DISH_FORM_WORDING);
        setDishToInspect(dish);
    };

    const closeModalHandler = () => {
        setFormInModal(null);
    };

    return (
        <Row styles='dashboard-main-container'>
            <Col styles='dashboard-container'>
                <Row styles='dashboard-title-container'>
                    <NutritionalityTitle styles={constants.NUTRITIONALITY_TITLE_STYLES} wording={constants.DISHES_WORDING} />
                </Row>
                <Col styles='dashboard-entries-container'>
                    {dishes.map((dish, index) => (
                        <></>
                    ))}
                </Col>
            </Col>
            <MUIModal
                content={formInModal === constants.DISH_FORM_WORDING ?
                    <DishForm
                        pet={dishToInspect}
                        formActionType={constants.UPDATE_DISH_WORDING}
                        onChangePetInfo={onChangePetInfo}
                    />
                    :
                    null}
                onClose={closeModalHandler}
            />
        </Row>
    );
}

export default Dashboard;