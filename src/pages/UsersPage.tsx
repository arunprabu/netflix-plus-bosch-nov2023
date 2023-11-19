import { Link } from "react-router-dom";
import ListUsers from "../components/ListUsers";

const UsersPage: React.FC = () => {
  return (
    <>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Welcome to User Management App!
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            culpa aperiam ipsum laborum reprehenderit temporibus eveniet quas,
            ex deleniti vero doloremque quia blanditiis corporis incidunt eum,
            aut veniam ratione aspernatur.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              className="btn btn-primary btn-lg px-4 me-md-2"
              to="/users/add"
            >
              Create User
            </Link>
          </div>
        </div>
      </div>

      <ListUsers />
    </>
  );
};

export default UsersPage;
