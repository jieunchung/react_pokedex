import React from "react";

const Card = (props) => {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`;

  return (
    <div>
      <img src={spriteUrl} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>habitat: {props.habitat}</p>
      <p>growth rate: {props.rate}</p>
      <span>
        egg group:
        <ul>
          {props.group.map((eggGroup, index) => {
            return <li key={index}>{eggGroup.name}</li>;
          })}
        </ul>
      </span>
    </div>
  );
};

export default Card;
