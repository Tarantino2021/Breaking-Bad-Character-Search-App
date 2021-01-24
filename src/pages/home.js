import React, { useState } from "react";
import { useViewportScroll, useTransform } from "framer-motion";
import SearchIcon from "@material-ui/icons/Search";
import { useMyContext } from "../context/contextProvider";
//component
import Card from "../components/Card";

const Home = () => {
  //cotext
  const { poster, fetchMovies, list } = useMyContext();

  //input state
  const [query, setQuery] = useState("");

  //submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchMovies(query);
    setQuery("");
  };

  //input handler
  const handleChange = async (e) => {
    setQuery(e.target.value);
  };

  //framer motion animation on scoll
  const { scrollYProgress } = useViewportScroll();

  return (
    <div className="home">
      <h1 className="home_header_text">Say My Name</h1>
      <form onSubmit={handleSubmit}>
        <div className="home_input">
          <input
            value={query}
            onChange={handleChange}
            type="text"
            placeholder="Search character name...  E.g. Walter White"
          />
          <SearchIcon />
        </div>
      </form>

      {poster?.length > 0 ? (
        <div className="wrapper">
          {poster.map((item) => (
            <Card key={item.char_id} item={item} />
          ))}
        </div>
      ) : (
        <h1>No Search Results...Search Again...</h1>
      )}
    </div>
  );
};

export default Home;
