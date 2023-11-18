import MenuList from "../components/MenuList";

const Footer: React.FC = () => {
  const copyrightYear = 2023;
  const developerName: string = 'Arun';

  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>
        Copyright {copyrightYear} | {developerName}
      </p>
    </footer>
  );
}

export default Footer;