import React from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../context/contextProvider";

const Header = () => {
  const { list } = useMyContext();

  return (
    <div className="header">
      <div className="header_container">
        <div className="row space-between">
          <div className="logo">
            <Link to="/">THE BREAKING BAD</Link>
          </div>
          <Link to="/mylist">
            <div className="menu">
              My List:<span>{list.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
