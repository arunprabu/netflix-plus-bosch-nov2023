import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface IFormData {
  name: string;
  phone: string;
  email: string;
}

const AddUser: React.FC = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<IFormData>();

  const handleAddUser: SubmitHandler<IFormData> = async (data) => {
    console.log(data);
    // the above data should be sent to the backend
    // what's the rest api url? https://jsonplaceholder.typicode.com/users
    // what's the http method? POST
    // What's the form data to be sent? data
    // what's the REST API Client tool? axios 
    try {
      const result = await axios.post("https://jsonplaceholder.typicode.com/users", data)
      console.log(result);
      setIsSaved(true);
    } catch(err) {
      // console.log(err);
      setIsError(true);
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <Link to="/users" className="btn btn-link">
        Go Back
      </Link>
      <form
        className="col-md-6 offset-md-3"
        onSubmit={handleSubmit(handleAddUser)}
      >
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="nameInput">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="nameInput"
              className="form-control"
              placeholder="Enter Name"
              {...register("name")}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="phoneInput"
              className="form-control"
              placeholder="Enter Phone"
              {...register("phone")}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="emailInput" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              id="emailInput"
              className="form-control"
              placeholder="Enter Email"
              {...register("email")}
            />
          </div>
        </div>

        {isSaved && (
          <div className="alert alert-success">Saved Successfully</div>
        )}

        {isError && (
          <div className="alert alert-danger">Some Error Occurred. Try again later!</div>
        )}

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
