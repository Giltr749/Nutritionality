import { NUTRITIONALITY_TITLE_STYLES } from '../../../Utils/Constants/constants';
import Col from '../../General/Flexboxes/Column/Col';
import Row from '../../General/Flexboxes/Row/Row';
import NutritionalityTitle from '../../General/Title/NutritionalityTitle';
import UserDetailsForm from './UserDetailsForm/UserDetailsForm';
import PasswordForm from './PasswordForm/PasswordForm';
import '../../../Styles/general.css';
import './ProfileForm.css';

const PROFILE_FORM_TITLE = "My Profile 🏡";

function ProfileForm() {
    return (
        <Col styles='profile-form-container'>
            <Row styles='title-wrapper'>
                <NutritionalityTitle
                    styles={NUTRITIONALITY_TITLE_STYLES}
                    wording={PROFILE_FORM_TITLE}
                />
            </Row>
            <Row styles='user-details-password-forms-container'>
                <Row styles='update-user-details-form-wrapper'>
                    <UserDetailsForm />
                </Row>
                <Row styles='update-password-form-wrapper'>
                    <PasswordForm />
                </Row>
            </Row>
        </Col>
    );
}

export default ProfileForm;


