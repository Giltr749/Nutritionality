import { getAllCapsString, getCapitalizedString } from '../../../../Utils/Library/library';
import { Link } from "react-router-dom";
import '../NavBar/NavBar.css';

function SettingsBar({ styles, greetingStyles, greeting, names, onAction }) {
    const greetingClasses = greetingStyles?.join(' ');
    const greetingFormatted = greeting.split(" ").map(greetingClass => getCapitalizedString(greetingClass)).join(" ");

    return (
        <div className={styles[0]}>
            <div className={greetingClasses}>{greetingFormatted}</div>
            {names.map((name, index) => (
                <div
                    key={index}>
                    {<Link
                        to={name === "log out" ? '/' : `/${name}`}
                        className={styles[1]}
                        onClick={() => onAction(name)}>
                        {getAllCapsString(name)}
                    </Link>}
                </div>
            ))}
        </div>
    );
}

export default SettingsBar;