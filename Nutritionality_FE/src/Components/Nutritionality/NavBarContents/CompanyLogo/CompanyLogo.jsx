import * as constants from '../../../../Utils/Constants/constants';
import Row from '../../../General/Flexboxes/Row/Row';
import './CompanyLogo.css';

function CompanyLogo() {
    return (
        <Row styles="company-logo-container">
            <div className="company-logo">{constants.COMPANY_NAME}</div>
        </Row>
    );
}

export default CompanyLogo;