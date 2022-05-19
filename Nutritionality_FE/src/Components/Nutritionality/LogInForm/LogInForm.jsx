import * as constants from '../../../Utils/Constants/constants';
import { NUTRITIONALITY_TITLE_STYLES } from '../../../Utils/Constants/constants';
import { useLogInForm } from './useLogInForm';
import GeneralButton from '../../General/Buttons/GeneralButton/GeneralButton.jsx';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Col from '../../General/Flexboxes/Column/Col';
import Row from '../../General/Flexboxes/Row/Row';
import NutritionalityTitle from '../../General/Title/NutritionalityTitle';
import '../../../Styles/general.css';
import './LogInForm.css';

function LogInForm({ successfulSignUpMessage, onAuthMethodChange }) {
    const {
        email,
        password,
        isLoading,
        isError,
        errorMessage,
        renderSuccessfulSignUpMessage,
        emailChangeHandler,
        passwordChangeHandler,
        logInHandler,
        getButtonStyles,
        getButtonStatus
    } = useLogInForm({ onAuthMethodChange });

    return (
        <Col styles='log-in-form-container'>
            <>
                {(renderSuccessfulSignUpMessage && successfulSignUpMessage) &&
                    <Row styles='new-user-greeting-container'>
                        <>{successfulSignUpMessage}</>
                    </Row>}
            </>
            <Row styles='title-container'>
                <NutritionalityTitle styles={NUTRITIONALITY_TITLE_STYLES} wording={constants.LOG_IN_WORDING} />
            </Row>
            <form className="log-in-form flex-col" onSubmit={logInHandler}>
                <fieldset className="log-in-fieldset"><legend>{constants.EMAIL_WORDING}</legend><input
                    required
                    type="email"
                    className="log-in-input"
                    value={email}
                    maxLength={45}
                    placeholder={`${constants.EMAIL_WORDING}: `}
                    onChange={(event) => emailChangeHandler(event.target.value)}
                /></fieldset>
                <fieldset className="log-in-fieldset"><legend>{constants.PASSWORD_WORDING}</legend><input
                    required
                    type="password"
                    className="log-in-input"
                    value={password}
                    maxLength={45}
                    placeholder={`${constants.PASSWORD_WORDING}: `}
                    onChange={(event) => passwordChangeHandler(event.target.value)}
                /></fieldset>
                <Row styles='log-in-form-button-container'>
                    <GeneralButton
                        wording={constants.LOG_IN_WORDING}
                        styles={getButtonStyles()}
                        isDisabled={getButtonStatus()}
                    />
                </Row>
                <Row styles='auth-wording-container'>
                    <div>{constants.LOGIN_AUTH_PROMPT}</div>
                    <div className="nutritionality-link" onClick={() => onAuthMethodChange(constants.SIGN_UP_WORDING)}>{constants.SIGN_UP_WORDING}</div>
                </Row>
                <Row styles="login-form-conditional-messaging-container">
                    <>
                        {isLoading &&
                            < Stack sx={{ color: 'silver' }} spacing={2} direction="row">
                                <CircularProgress color="inherit" />
                            </Stack>}
                        {isError &&
                            < Alert severity="error">
                                {errorMessage}
                            </Alert>}
                    </>
                </Row>
            </form>
        </Col>
    );
}

export default LogInForm;