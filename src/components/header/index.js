import React from "react";
import { auth } from "../../config/firebase";
import "../../styles/header.css";

const Header = ({ user }) => {
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__option" onClick={handleAuth}>
          <span className="header__option__firstLine">Hello {user?.email}</span>
          <span className="header__option__secondLine">
            Sign Out
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
