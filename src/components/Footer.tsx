import MenuList from "./MenuList";

const Footer: React.FC = () => {
  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>Copyright 2023 | Arun</p>
    </footer>
  );
}

export default Footer;