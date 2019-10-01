import React from 'react';
import AddIcon from '../../assets/images/add';
import './Navbar.css';

export default function Navbar() {
    // const [one, two] = useState(0);
    return (
        <div id="navbar">
            <div className="name-logo">Name/Logo</div>
            <div className="add">
                <AddIcon fill={'#fff'} style={{ marginLeft: 20 }} />
            </div>
        </div>
    )
}