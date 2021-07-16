import React, { useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { form } from 'react-bootstrap';


export default function SearchForm({ handleSearchJobsByValue }) {
  const history = useHistory();
  // const initialSearch ="";


  const [searchValue, setSearchValue] = useState("");
  // const [value, setValue] = useState();

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value);
  }



 
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log("funciona boton");
    handleSearchJobsByValue({searchValue})
    history.push("/results")
  }

    

  useEffect(() => {
    if (searchValue ===!"") {
      history.push("/")
      
    } else {console.log("nada") };
  }, [searchValue])

  return (
<form class="container-fluid" onSubmit={handleSubmit}>
    
      <div className="row" >
        <div className="col-8 ml-4 mr-4">
          <input type="text" 
            className="form-control"
            placeholder="Descripción"
            onChange={handleChange}/>
        </div>


        <div className="col-xs-5" >
          <button type="submit" 
            className="btn btn-primary"
          // onClick={handleSearchJobsByValue}
          >Busca Empleo
          </button>
        </div>
      </div>
    
</form>    
  );
}