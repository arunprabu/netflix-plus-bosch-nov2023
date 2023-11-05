// Functional Component with Arrow Fn 
const MenuList: React.FC = () => {
  // must return JSX
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Netflix App
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          User Management App
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Timeline
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Products
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Tree View
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contact Us
        </a>
      </li>
    </ul>
  );
}

export default MenuList;
