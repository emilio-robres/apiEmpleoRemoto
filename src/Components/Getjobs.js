import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Card, Container } from "react-bootstrap";

function GetJobs({ finalSearchValue }) {
  const [jobs, setJobs] = useState(undefined);
  const BASE_URL = `https://remotive.io/api/remote-jobs?search=${finalSearchValue}`;
  
  

  useEffect(( ) => {
    axios.get(BASE_URL).then((response) => {
      console.log(response.data.jobs);
      setJobs(response.data.jobs);
    });
  }, [finalSearchValue]);

  
  return (                     
          <div>                                                         
              {jobs &&
                jobs.map((job) => {
                  console.log(job.title);
                  return (
                    
                          <div className="card">
                            {/* <div className="card-body">
                              <div className="card-title text-primary" > */}
                                <h1>{job.title}</h1>
                                <div className="card-text text-secondary">
                                  <h3>{job.category}</h3>
                                  <h3>{job.id}</h3>
                                </div>
                              </div>
                          //   </div>
                          // </div>
                    )

                })}                              
                                    
          </div>                                                
  );
}

export default GetJobs;
