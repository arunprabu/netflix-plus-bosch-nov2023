import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type UserType = {
  id: number;
  name: string;
  phone: string;
  email: string;
}

const UserDetails = () => {
  // Let's read the URL param
  const { id } = useParams<{id: string}>();
  console.log(id);
  const [user, setUser] = useState<UserType>();
  // TODO: handle the error

  useEffect(() => {
    // useEffect will be called automatically after the Initial Rendering
    // ideal place for you to connect to the rest api
    // what's the rest api url? https://jsonplaceholder.typicode.com/users/1
    // what's the http method? GET
    // what's the REST API Client tool? axios
    const fetchUserDetails = async () => {
      try {
        const result = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        console.log(result);
        setUser(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <>
      <h1>User Details</h1>
      <Link to="/users" className="btn btn-link">
        Go Back
      </Link>
      <div className="card">
        <div className="card-header">
          You are seeing details of User ID: {user?.id}
        </div>
        <div className="card-body">
          <h5 className="card-title">Name: {user?.name}</h5>
          <p className="card-text">E-Mail: {user?.email}</p>
          <p className="card-text">Phone: {user?.phone}</p>
          <Link to="edit" className="btn btn-primary">
            Edit
          </Link>

          <button className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
