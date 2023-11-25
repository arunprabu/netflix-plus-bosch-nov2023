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
import { CartProvider } from "./contexts/CartContext";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from './locales/en/translation.json';
import frTranslation from "./locales/fr/translation.json";
import enAuTranslation from "./locales/en-AU/translation.json";

// Setting up i18n with translations
i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      // loading the translation files
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      "en-AU": { translation: enAuTranslation }
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

// Component will have TS, JSX and CSS
const App: React.FC = () => {
  // must return JSX
  return (
    <BrowserRouter>
      {/* {Step 3 of Context API: Let's provide the data to the children component } */}
      <CartProvider>
        <Header></Header>
        <main className="container mt-5 pt-3">
          {/* URL configurations */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/netflix" element={<NetflixPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/tree-view" element={<TreeViewPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/spotify" element={<SpotifyPage />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
