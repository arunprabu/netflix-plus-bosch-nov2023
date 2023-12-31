import { Link } from "react-router-dom";
import MenuList from "../components/MenuList";
import { useCart } from "../contexts/CartContext";

// comp defn
const Header: React.FC = () => {
  const context = useCart();
  console.log(context);

  // must return JSX
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Netflix Plus App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />
            <button className="btn btn-warning">
              Cart({context?.cartItems.length})
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

// export
export default Header;
