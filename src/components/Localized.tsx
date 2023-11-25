import { useTranslation } from "react-i18next";

const Localized: React.FC = () => {
  // Before using useTranslation -- setup i18n in App.tsx
  const { t, i18n} = useTranslation();

  const handleChangeLanguage = (targetLanguage: string) => {
    i18n.changeLanguage(targetLanguage);
  }

  return (
    <div>
      <h3>You are seeing i18n and l10n here</h3>
      <p>The following texts will appear in different languages</p>
      <hr />
      <h4>{t("welcome")}</h4>
      <p>{t("intro")}</p>

      <div>
        <button onClick={() => handleChangeLanguage("en")}>English</button>
        <button onClick={() => handleChangeLanguage("fr")}>French</button>
        <button onClick={() => handleChangeLanguage("en-AU")}>Australian English</button>
      </div>
    </div>
  );
}

export default Localized;
