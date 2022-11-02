import React from "react";
import "./Button.css";

const Button = (props) => {
  const previousPokemon = () => {
    props.setIndex(props.index - 1);
  };

  const nextPokemon = () => {
    props.setIndex(props.index + 1);
  };

  return (
    <div className="button">
      <button className="previous" onClick={previousPokemon}>
        Previous
      </button>
      <button onClick={nextPokemon}>Next</button>
    </div>
  );
};

export default Button;
