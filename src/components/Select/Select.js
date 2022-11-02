import React from "react";
import "./Select.css";

const Select = (props) => {
  return (
    <select onChange={(e) => props.setIndex(parseInt(e.target.value))}>
      <option value={props.index}>Select from your Pokédex</option>
      {props.list.map((list, index) => {
        return (
          <option key={index} value={index + 1}>
            {list.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
