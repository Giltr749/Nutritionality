import React from 'react';
import '../../../Styles/general.css';

function NutritionalityTitle({ styles, wording }) {
    return (
        <div className={styles}>{wording}</div>
    );
}

export default React.memo(NutritionalityTitle);