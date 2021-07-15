import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";


import { FORM} from 'react-bootstrap';


export default function SearchForm({handleSearchJobsByValue}) {
  const history = useHistory();
  
  const initialSearch ="";
  
  
  const [searchValue,setSearchValue]= useState(initialSearch);
  const [value,setValue]= useState();
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value) 
  }
  
  
  const handleSubmit = (e)=> {
    e.preventDefault();
    handleSearchJobsByValue(value);
    
    console.log ("funciona boton");
  
    setSearchValue(value);
     
  }  
       

  useEffect(() => {
    
    if(searchValue===!"")
     {history.push("/results")}
  
        
    
    
   
    
  }, [searchValue])
 
  
  
    return ( 
     
          
<div className="row" onSubmit={handleSubmit}>
  <div className="col-xs-6 mr-4">
      <input type="text" 
      className="form-control mb-2" 
      placeholder="Descripción"
      onChange={handleChange}/>
  </div> 


  <div className="col-xs-3">    
      <button type="submit" 
              className="btn btn-primary mb-2"
              // onClick={handleSearchJobsByValue}
              >Busca Empleo
      </button>
  </div>
</div>

  );
}