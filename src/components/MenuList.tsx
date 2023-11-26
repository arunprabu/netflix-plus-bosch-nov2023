import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Functional Component with Arrow Fn
const MenuList: React.FC = () => {
  // must return JSX
  // keep an array for all these navigations

  const { isAuthenticated, logout } = useAuth();

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </li>
      {!isAuthenticated ? (
        <li className="nav-item">
          <Link className="nav-link" to="/auth/login">
            Login
          </Link>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/netflix">
              Netflix App
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              User Management App
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/timeline">
              Timeline
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/tree-view">
              Tree View
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/spotify">
              Spotify App
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link text-white"
              onClick={() => logout()}
            >
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default MenuList;
