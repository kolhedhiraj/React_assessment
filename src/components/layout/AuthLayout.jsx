import AppLogo from "../common/AppLogo";
import LanguageSwitch from "../common/LanguageSwitch";
import FooterLinks from "../common/FooterLinks";

const AuthLayout = ({ children }) => {
  return (
    <div className="registration-page">
      <div className="application-header">
        <AppLogo />

        <LanguageSwitch />
      </div>

      {/* <img
        src="/bg-lines.png"
        alt=""
        className="background-lines"
      /> */}

      <div className="form-center">
        {children}
      </div>

      <FooterLinks />
    </div>
  );
};

export default AuthLayout;
