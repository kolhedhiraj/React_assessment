import logo from "../../assets/logos/woliba Logo.png";

const AppLogo = () => {
  return (
    <div className="logo-wrapper">
      <a href="/">
        <img
          src={logo}
          alt="Woliba Logo"
          className="logo"
        />
      </a>
    </div>
  );
};

export default AppLogo;