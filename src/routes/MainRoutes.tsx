import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NetflixPage from "../pages/NetflixPage";
import UsersPage from "../pages/UsersPage";
import TimelinePage from "../pages/TimelinePage";
import ProductsPage from "../pages/ProductsPage";
import TreeViewPage from "../pages/TreeViewPage";
import AboutPage from "../pages/AboutPage";
import ContactUsPage from "../pages/ContactUsPage";
import SpotifyPage from "../pages/SpotifyPage";
import AddUser from "../components/AddUser";
import UserDetails from "../components/UserDetails";
import LoginPage from "../pages/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminPage from "../pages/AdminPage";
import { ErrorBoundary } from "react-error-boundary";

const MainRoutes = () => {
  return (
    <ErrorBoundary
      fallback={
        <div className="alert alert-danger">
          Something went wrong. Try again later
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />

        <Route path="/auth/login" element={<LoginPage />} />

        {/* The following routes are protected. You need to login to access them */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/netflix" element={<NetflixPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/tree-view" element={<TreeViewPage />} />
          <Route path="/spotify" element={<SpotifyPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default MainRoutes;
