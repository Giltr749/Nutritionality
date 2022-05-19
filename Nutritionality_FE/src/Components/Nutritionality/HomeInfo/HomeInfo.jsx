import Row from "../../General/Flexboxes/Row/Row";
import home_page_food_image from '../../../Images/home_page_food_image.jpg';
import '../../../Styles/general.css';
import './HomeInfo.css';

function HomeInfo() {
    return (
        <Row styles='home-main-image'>
            <img className="home-main-image-src" src={home_page_food_image} alt="Plate of Food" />
        </Row>
    );
}

export default HomeInfo;