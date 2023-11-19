import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const ListUsers: React.FC = () => {
  // loading state
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // successful response
  const [users, setUsers] = useState<UserType[]>([]);

  // for error
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    console.log("Inside useEffect");
    // useEffect will be called automatically after the Initial Rendering
    // ideal place for you to connect to rest api
    // what's the rest api url? https://jsonplaceholder.typicode.com/users
    // what's the http method? GET
    // what's the REST API Client tool? axios (npm i axios) or fetch
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res: AxiosResponse<any, any>) => {
        // getting successful response
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err: any) => {
        // catch the error
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="row">
      <h2>Listing Users</h2>
      {isLoading && (
        <div className="text-center">
          <div className="spinner-border text-success" role="status"></div>
          <p>Please wait while we load users</p>
        </div>
      )}

      {isError && (
        <div className="alert alert-danger">
          Some Error occurred! Try again later!
        </div>
      )}

      {users.map((user) => {
        return (
          <div className="col-md-3" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <Link to={`/users/${user.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListUsers;
