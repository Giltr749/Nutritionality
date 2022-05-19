import { getAllCapsString } from '../../../../Utils/Library/library';
import { Link } from "react-router-dom";
import '../NavBar/NavBar.css';

function AdminBar({ styles, names, onAction }) {
    return (
        <div className={styles[0]}>
            {names.map((name, index) => (
                <div
                    key={index}>
                    {<Link
                        to={name === 'add pet' ? `/dashboard` : `/${name}`}
                        className={styles[1]}
                        onClick={() => onAction(name)}>
                        {getAllCapsString(name)}
                    </Link>}
                </div>
            ))}
        </div>
    );
}

export default AdminBar;