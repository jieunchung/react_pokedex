import React, { useEffect } from "react";
import "./Card.css";
import "../../font/PokemonGb-RAeo.ttf";
const Card = (props) => {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`;

  useEffect(() => {
    document.body.className = props.habitat;
  }, [props.habitat]);

  return (
    <div className="card">
      <div className="sprite">
        <div className="border">
          <img src={spriteUrl} alt={props.name} />
        </div>
      </div>
      <h3 className="pokémon">{props.name}</h3>
      <p className="description">{props.description}</p>

      <ul className="facts">
        <li>+ habitat: {props.habitat}</li>
        <li>+ growth: {props.rate}</li>
        <li>
          + egg:{" "}
          {props.group.map((eggGroup, index) => {
            return (
              <li className="egg-group" key={index}>
                {eggGroup.name}
              </li>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Card;
