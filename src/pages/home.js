import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useMyContext } from "../context/contextProvider";
//component
import Card from "../components/Card";
//loader
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = () => {
  //cotext
  const { characters, fetchMovies, loading } = useMyContext();

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

      <div className="wrapper">
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {characters.map((item) => (
              <Card key={item.char_id} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
