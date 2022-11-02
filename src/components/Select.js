import React from "react";

const Select = (props) => {
  return (
    <div>
      <select onChange={(e) => props.setIndex(e.target.value)}>
        <option>Choose a Pokémon</option>
        {props.list.map((list, index) => {
          return (
            <option key={index} value={index + 1}>
              {list.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
