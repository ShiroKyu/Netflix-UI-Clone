import React from "react";
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <img
          src="https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt="Netflix logo"
        />
      </div>
      <div className="header--user">
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="User profile"
        />
      </div>
    </header>
  );
};
