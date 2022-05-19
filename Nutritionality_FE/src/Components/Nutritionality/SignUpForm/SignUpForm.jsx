import * as constants from '../../../Utils/Constants/constants';
import { useSignUpForm } from './useSignUpForm';
import { NUTRITIONALITY_TITLE_STYLES } from '../../../Utils/Constants/constants';
import GeneralButton from '../../General/Buttons/GeneralButton/GeneralButton.jsx';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Col from '../../General/Flexboxes/Column/Col';
import Row from '../../General/Flexboxes/Row/Row';
import NutritionalityTitle from '../../General/Title/NutritionalityTitle';
import '../../../Styles/general.css';
import './SignUpForm.css';

function SignUpForm({ formTitle, onAuthMethodChange, onSuccessfulSignUp, submitButtonWording, wordingContainer }) {
    const {
        userName,
        email,
        password,
        confirmPassword,
        isLoading,
        isError,
        errorMessage,
        userNameChangeHandler,
        emailChangeHandler,
        passwordChangeHandler,
        confirmPasswordChangeHandler,
        signUpHandler,
        getButtonStyles,
        getButtonStatus
    } = useSignUpForm({ formTitle, onAuthMethodChange, onSuccessfulSignUp, submitButtonWording, wordingContainer });

    return (
        <Col styles='sign-up-form-container'>
            <Row styles='title-container'>
                <NutritionalityTitle
                    styles={NUTRITIONALITY_TITLE_STYLES}
                    wording={formTitle}
                />
            </Row>
            <form className="sign-up-form flex-col" onSubmit={signUpHandler}>
                <fieldset className="sign-up-fieldset"><legend>{constants.USER_NAME_WORDING}</legend><input
                    required
                    type="text"
                    className="sign-up-input"
                    value={userName}
                    maxLength={45}
                    placeholder={`${constants.USER_NAME_WORDING}: `}
                    onChange={(event) => userNameChangeHandler(event.target.value)}
                /></fieldset>
                <fieldset className="sign-up-fieldset"><legend>{constants.EMAIL_WORDING}</legend><input
                    required
                    type="email"
                    className="sign-up-input"
                    value={email}
                    maxLength={45}
                    placeholder={`${constants.EMAIL_WORDING}: `}
                    onChange={(event) => emailChangeHandler(event.target.value)}
                /></fieldset>
                <fieldset className="sign-up-fieldset"><legend>{constants.PASSWORD_WORDING}</legend><input
                    required
                    type="password"
                    className="sign-up-input"
                    value={password}
                    maxLength={45}
                    placeholder={`${constants.PASSWORD_WORDING}: `}
                    onChange={(event) => passwordChangeHandler(event.target.value)}
                /></fieldset>
                <fieldset className="sign-up-fieldset"><legend>{constants.CONFIRM_PASSWORD_WORDING}</legend><input
                    required
                    type="password"
                    className="sign-up-input"
                    value={confirmPassword}
                    maxLength={45}
                    placeholder={`${constants.CONFIRM_PASSWORD_WORDING}: `}
                    onChange={(event) => confirmPasswordChangeHandler(event.target.value)}
                /></fieldset>
                <Row styles='sign-up-form-button-container'>
                    <GeneralButton
                        wording={submitButtonWording}
                        styles={getButtonStyles()}
                        isDisabled={getButtonStatus()}
                    />
                </Row>
                {wordingContainer &&
                    <Row styles='auth-wording-container'>
                        <div>{constants.SIGNUP_AUTH_PROMPT}</div>
                        <div
                            className="nutritionality-link"
                            onClick={() => onAuthMethodChange && onAuthMethodChange(constants.LOG_IN_WORDING)}>
                            {constants.LOG_IN_WORDING}
                        </div>
                    </Row>}
                <Row styles="signup-form-conditional-messaging-container">
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

export default SignUpForm;