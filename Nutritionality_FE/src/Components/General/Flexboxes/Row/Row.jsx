import '../../../../Styles/general.css';

function Row({ styles, children, onAction }) {
    const classes = 'flex-row ' + styles;

    return (
        <div className={classes} onClick={onAction && (() => onAction())}>
            {children}
        </div>
    );
}

export default Row;