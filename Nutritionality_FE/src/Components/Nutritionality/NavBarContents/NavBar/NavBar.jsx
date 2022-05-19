import { getAllCapsString } from '../../../../Utils/Library/library';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './NavBar.css';

function NavBar({ styles, names }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className={styles[0]}>
            {names.map((name, index) => (
                <div
                    key={index}
                    onClick={() => setActiveTabIndex(index)}>
                    {<Link
                        to={name === 'home' ? '/' : `/${name}`}
                        className={(index === activeTabIndex ? 'selected-tab ' : 'deselected-tab ') + styles[1]}>
                        {getAllCapsString(name)}
                    </Link>}
                </div>
            ))}
        </div>
    );
}

export default NavBar;