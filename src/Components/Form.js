import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';


export default function SearchForm({ handleSearchJobsByValue }) {
  const history = useHistory();



  const [searchValue, setSearchValue] = useState("");


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

    

  // useEffect(() => {
  //   if (searchValue === false) {
  //     history.push("/")
      
  //   } else {console.log("nada") };
  // }, [searchValue])

  return (
<Form class="container-fluid" onSubmit={handleSubmit}>
    
      <div className="d-flex flex-row align-items-center justify-content-center" >
        <div className="col-12">
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
    
</Form>    
  );
}