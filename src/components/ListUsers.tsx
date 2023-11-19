import { Link } from 'react-router-dom';

const ListUsers = () => {
  return (
    <div className="row">
      <h2>Listing Users</h2>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">John</h5>
            <p className="card-text">Email: j@k.com</p>
            <p className="card-text">Phone: 23456789</p>
            <Link to="/users/1">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListUsers;
