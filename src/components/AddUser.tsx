import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div>
      <h1>Add User</h1>
      <Link to="/users" className="btn btn-link">
        Go Back
      </Link>
      <form className="col-md-6 offset-md-3">
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
            <div className="invalid-feedback">
              <div>Name is required</div>
            </div>
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="staticPhone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone"
            />
            <div className="invalid-feedback">
              <div>Phone is required</div>
            </div>
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
            <div className="invalid-feedback">
              <div>Email is required</div>
            </div>
          </div>
        </div>

        <div className="alert alert-success">Saved Successfully</div>

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
