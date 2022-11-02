import React, { useEffect } from "react";
import "./Card.css";
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
      <section>
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
      </section>
    </div>
  );
};

export default Card;
