import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <>
      <h1>User Details</h1>
      <Link to="/users" className="btn btn-link">
        Go Back
      </Link>
      <div className="card">
        <div className="card-header">You are seeing details of User ID: 1</div>
        <div className="card-body">
          <h5 className="card-title">Name: John</h5>
          <p className="card-text">E-Mail: a@b.com</p>
          <p className="card-text">Phone: 123456789</p>
          <Link to="edit" className="btn btn-primary">
            Edit
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
