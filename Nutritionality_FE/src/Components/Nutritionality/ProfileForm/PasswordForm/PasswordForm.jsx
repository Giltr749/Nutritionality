import * as constants from "../../../../Utils/Constants/constants";
import Col from "../../../General/Flexboxes/Column/Col";
import Row from "../../../General/Flexboxes/Row/Row";
import GeneralButton from "../../../General/Buttons/GeneralButton/GeneralButton.jsx";
import NutritionalityTitle from '../../../General/Title/NutritionalityTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { usePasswordForm } from './usePasswordForm';
import '../../../../Styles/general.css';
import './PasswordForm.css';

function PasswordForm() {
    const {
        oldPassword,
        newPassword,
        confirmNewPassword,
        isLoading,
        isError,
        errorMessage,
        isSuccessfulUpdate,
        oldPasswordChangeHandler,
        newPasswordChangeHandler,
        confirmNewPasswordChangeHandler,
        updatePasswordHandler
    } = usePasswordForm();

    return (
        <Col styles='password-form-container'>
            <form className="password-form flex-col" onSubmit={updatePasswordHandler}>
                <Row styles='title-wrapper'>
                    <NutritionalityTitle
                        styles={constants.NUTRITIONALITY_TITLE_STYLES}
                        wording={`${constants.UPDATE_PASSWORD_WORDING} ㊙️`}
                    />
                </Row>
                <fieldset className="sign-up-fieldset"><legend>{constants.OLD_PASSWORD_WORDING}</legend><input
                    required
                    type="password"
                    className="sign-up-input"
                    value={oldPassword}
                    maxLength={45}
                    placeholder={`${constants.PASSWORD_WORDING}: `}
                    onChange={(event) => oldPasswordChangeHandler(event.target.value)}
                /></fieldset>
                <fieldset className="sign-up-fieldset"><legend>{constants.NEW_PASSWORD_WORDING}</legend><input
                    required
                    type="password"
                    className="sign-up-input"
                    value={newPassword}
                    maxLength={45}
                    placeholder={`${constants.PASSWORD_WORDING}: `}
                    onChange={(event) => newPasswordChangeHandler(event.target.value)}
                /></fieldset>
                <fieldset className="sign-up-fieldset"><legend>{constants.CONFIRM_NEW_PASSWORD_WORDING}</legend><input
                    required
                    type="password"
                    className="sign-up-input"
                    value={confirmNewPassword}
                    maxLength={45}
                    placeholder={`${constants.CONFIRM_PASSWORD_WORDING}: `}
                    onChange={(event) => confirmNewPasswordChangeHandler(event.target.value)}
                /></fieldset>
                <Row styles='password-form-button-wrapper'>
                    <GeneralButton
                        wording={constants.UPDATE_PASSWORD_WORDING}
                        isDisabled={false}
                    />
                </Row>
                <Row styles="password-form-conditional-messaging-container">
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
        </Col>
    );
}

export default PasswordForm;