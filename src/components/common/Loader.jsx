import loaderGif from "../../assets/images/running-transparent.gif";

import "./style/loader.scss";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <img
        src={loaderGif}
        alt="Loading"
        className="loader-gif"
      />
    </div>
  );
};

export default Loader;