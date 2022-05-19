import '../../../../Styles/general.css';

function Col({ styles, children, onAction }) {
    const classes = 'flex-col ' + styles;

    return (
        <div className={classes} onClick={onAction && (() => onAction())}>
            {children}
        </div >
    );
}

export default Col;