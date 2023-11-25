import { Route, Routes } from 'react-router-dom';
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
import LoginPage from '../pages/LoginPage';
import ProtectedRoutes from './ProtectedRoutes';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/netflix" element={<NetflixPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/add" element={<AddUser />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/auth/login" element={<LoginPage />} />

      {/* The following routes are protected. You need to login to access them */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/tree-view" element={<TreeViewPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/spotify" element={<SpotifyPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;