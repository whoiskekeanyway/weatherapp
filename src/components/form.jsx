import React from "react";
import "./form.css";

const Form = props => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

// Alert to display when user didnt enter value 
const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Can not be empty...!
      Please Enter City and Country...!
    </div>
  );
};

export default Form;