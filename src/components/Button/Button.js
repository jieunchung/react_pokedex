import React from "react";
import "./Button.css";

const Button = (props) => {
  const previousPokemon = () => {
    props.index > 1
      ? props.setIndex(props.index - 1)
      : props.setIndex(props.index);
  };

  const nextPokemon = () => {
    props.index === 151
      ? props.setIndex(props.index)
      : props.setIndex(props.index + 1);
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
