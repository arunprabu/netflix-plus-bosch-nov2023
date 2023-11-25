// npm i i18next react-i18next
import Localized from "../components/Localized";
import NewsMedia from "../components/NewsMedia";
import SquareCalculator from "../components/SquareCalculator";

const AboutPage: React.FC<any> = (props) => {
  return (
    <div>
      <h1>About Page</h1>
      <h2>Demo of Error Boundary</h2>
      {/* <p>{props.add()}</p> */}
      <h2>Demo of i18n and l10n</h2>
      <Localized />

      <hr />
      <h2>useCallback Hook Demo</h2>
      <NewsMedia />

      <hr />
      <h2>useMemo Hook Demo</h2>
      <SquareCalculator />
    </div>
  );
};

export default AboutPage;
