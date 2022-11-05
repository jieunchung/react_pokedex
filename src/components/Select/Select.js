import React from "react";
import "./Select.css";
import SelectJS from "react-select";

const Select = (props) => {
  const options = props.list.map((list, index) => {
    return {
      key: index,
      value: index + 1,
      label: list.name,
    };
  });

  const styles = {
    container: (styles) => ({
      ...styles,
      width: "35rem",
    }),
    control: (styles) => ({
      ...styles,
      minHeight: "7vh",
      fontSize: "0.9rem",
      textTransform: "capitalize",
      borderRadius: 0,
      border: "transparent",
      ":hover": {
        border: "transparent",
      },
      boxShadow: "none",
    }),
    singleValue: (styles) => ({
      ...styles,
      overflow: "visible",
    }),
  };
  return (
    <div>
      <SelectJS
        className="select"
        options={options}
        styles={styles}
        onChange={(e) => props.setIndex(e.value)}
      />
    </div>
  );
};

export default Select;
