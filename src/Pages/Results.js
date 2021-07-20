import React from 'react'
import GetJobs from '../Components/Getjobs';
import Logo from '../Components/Logo.js';
import Log from '../Components/Log.js';
import { useHistory } from "react-router-dom";




 
const Results = ({ finalSearchValue }) => {
   
    const history = useHistory();
    const handleOnClick = () => { history.push("/") }
    return (
        <body>
            <div>
                <div className="resultados">
                    <div className="header-results">
                        <Logo />
                        <button type="button"
                            class="btn btn-secondary btn-sm"
                            onClick={handleOnClick}>Nueva Busqueda</button>
                        <Log />
                    </div>

                    <div className="row d-flex mt-4 mr-2 justify-content-center">
                        <div className="col-md-6">
                            <GetJobs finalSearchValue={finalSearchValue} />
                        </div>
                    </div>
                </div>





            </div>
        </body>
    )
}

export default Results
