import React, {useState} from "react";
import { useHistory } from "react-router-dom";


import { FORM} from 'react-bootstrap';


export default function SearchForm({handleSearchJobsByValue}) {
  const history = useHistory();
  
  const initialSearch ={
    search:" "
  }
  
  const [searchValue,setSearchValue]= useState("initialSearch");
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value) 
  }
  
  
  const handleSubmit = (e)=> {
    e.preventDefault();
    setSearchValue(e.target.value);
    history.push("/results");
    console.log ("funciona boton");
    
  }  
       
 
  handleSearchJobsByValue(searchValue)
 
  
  
    return ( 
     
          
<form className="col col-6" onSubmit={handleSubmit}>
 <div className="formulario">
    
      <input type="text" 
      className="form-control mb-2" 
      placeholder="Descripción"
      onChange={handleChange}/>
   
    
      <button type="submit" 
              className="btn btn-primary mb-2"
              // onClick={handleSearchJobsByValue}
              >Busca Empleo
      </button>
    
  </div>
</form>

  );
}