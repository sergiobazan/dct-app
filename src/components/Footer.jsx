import deadfulTomatoes from "../assets/deadful-tomatoes.svg";
import appStore from "../assets/app-store.svg";
import googlePlay from "../assets/google-play.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo-container">
        <img src={deadfulTomatoes} alt="deadful-tomatoes" />
      </div>
      <div className="footer-stores-container">
        <img src={appStore} alt="app-store" />
        <img src={googlePlay} alt="google-play" />
      </div>
      <div className="footer-copyright-container">
        <p>© Copyright 2022 Dreadful Tomatoes. All rights reserved.</p>
      </div>
    </div>
  );
};
