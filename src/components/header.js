import React from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../context/contextProvider";
//framer
import { motion } from "framer-motion";

const Header = () => {
  const { list } = useMyContext();

  return (
    <div className="header">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="header_container"
      >
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
      </motion.div>
    </div>
  );
};

export default Header;
