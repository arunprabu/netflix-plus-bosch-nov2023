import Counter from "../components/Counter";
import Localized from "../components/Localized";
// npm i i18next react-i18next

const AboutPage: React.FC<any> = (props) => {
  return (
    <div>
      <h1>About Page</h1>
      <h2>Demo of Error Boundary</h2>
      {/* <p>{props.add()}</p> */}
      <h2>Demo of i18n and l10n</h2>
      <Localized />

      <hr/>
      <h2>useCallback Hook Demo</h2>
      <Counter />
    </div>
  )
}

export default AboutPage