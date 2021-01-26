import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useMyContext } from "../context/contextProvider";
import { useMyAlertContext } from "../context/Alert/alertContextProvider";
//component
import Card from "../components/Card";
import AlertBox from "../components/AlertBox";
//loader
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = () => {
  //cotext
  const { characters, fetchMovies, loading } = useMyContext();
  const { alert, showAlert } = useMyAlertContext();

  //input state
  const [query, setQuery] = useState("");

  //submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (query === "" && characters.length <= 0) {
      showAlert("Please search your character");
    } else {
      fetchMovies(query);
    }
    setQuery("");
  };

  //input handler
  const handleChange = async (e) => {
    setQuery(e.target.value);
  };
  console.log(characters);
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
        {alert ? <AlertBox text={alert.text} /> : null}
        {loading ? (
          <CircularProgress className="loader" />
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
