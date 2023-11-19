import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import NetflixPage from "./pages/NetflixPage";
import UsersPage from "./pages/UsersPage";
import TimelinePage from "./pages/TimelinePage";
import ProductsPage from "./pages/ProductsPage";
import TreeViewPage from "./pages/TreeViewPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import SpotifyPage from "./pages/SpotifyPage";
import AddUser from "./components/AddUser";
import UserDetails from "./components/UserDetails";

// Component will have TS, JSX and CSS
const App: React.FC = () => {
  // must return JSX
  return (
    <BrowserRouter>
      <Header></Header>

      <main className="container mt-5 pt-3">
        {/* URL configurations */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/netflix" element={<NetflixPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/1" element={<UserDetails />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/tree-view" element={<TreeViewPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/spotify" element={<SpotifyPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
