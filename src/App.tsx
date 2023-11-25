import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import { CartProvider } from "./contexts/CartContext";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from './locales/en/translation.json';
import frTranslation from "./locales/fr/translation.json";
import enAuTranslation from "./locales/en-AU/translation.json";
import MainRoutes from "./routes/MainRoutes";
import { AuthProvider } from "./contexts/AuthContext";

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
      <AuthProvider>
        {/* {Step 3 of Context API: Let's provide the data to the children component } */}
        <CartProvider>
          <Header></Header>
          <main className="container mt-5 pt-3">
            {/* URL configurations */}
            <MainRoutes />
          </main>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
