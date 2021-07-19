import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Badge } from "react-bootstrap";

function GetJobs({ finalSearchValue }) {

  const [jobs, setJobs] = useState(undefined);
  const BASE_URL = `https://remotive.io/api/remote-jobs?search=${finalSearchValue}`;



  useEffect(() => {
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

            <Card style={{ width: '50rem' , marginBotton: "10px"}}>
              <Card.Body>
                <div >
                  <Card.Title className="d-flex justify-content-evenly">
                    <div className="Card.Title text-primary" >
                      {job.title}-<span className="text-muted font-weight-light mr-4">{job.id}</span>
                      <span className="text-info" >  {job.company_name}</span>
                    </div>
                  </Card.Title>
                </div>

                <Card.Subtitle className="text-muted mb-2">
                  {new Date(job.publication_date).toLocaleDateString()}
                </Card.Subtitle>

                <Badge variant="secondary">
                  {job.job_type}
                </Badge>

                <Card.Text>
                  <div className="card.text text-secondary">
                    {job.category}
                  </div>
                </Card.Text>



              </Card.Body>
            </Card>
          )

        })}

    </div>
  );
}

export default GetJobs;
