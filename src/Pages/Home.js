import React from 'react';
import Form from '../Components/Form';
import "../App.css";
import Logo from '../Components/Logo.js';
import Log from '../Components/Log.js';






const Home = ({ handleSearchJobsByValue }) => {
    return (
        <body>
            <div className="portada">
                <div className="header">
                    <Logo />
                    <Log />
                </div>
                <div className="padre">
                    <div className="rectangle-1">
                        <Form handleSearchJobsByValue={handleSearchJobsByValue} />
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Home
