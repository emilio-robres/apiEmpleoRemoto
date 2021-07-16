import React, { useState } from "react";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




export default function App() {
  
  const [finalSearchValue, setFinalSearchValue] = useState("");
  const handleSearchJobsByValue = (data) => {

    console.log("App", data);

    setFinalSearchValue(data);


  };


  return (


    <div>



      <Router>
        <Switch>
          <Route exact path="/"><Home handleSearchJobsByValue={handleSearchJobsByValue} /></Route>
          <Route exact path="/Results"><Results finalSearchValue={finalSearchValue} /></Route>
        </Switch>
      </Router>
    </div>
  );
}
