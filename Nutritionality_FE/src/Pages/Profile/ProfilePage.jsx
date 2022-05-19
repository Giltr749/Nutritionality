import ProfileForm from '../../Components/Nutritionality/ProfileForm/ProfileForm';
import Row from '../../Components/General/Flexboxes/Row/Row';
import '../../Styles/general.css';

function ProfilePage() {
    return (
        <Row styles='skinny-page'>
            <ProfileForm />
        </Row>
    );
}

export default ProfilePage;
