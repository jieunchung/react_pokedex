import React, { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(54);
  const [flavorText, setFlavorText] = useState("");
  const [name, setName] = useState("");
  const [eggGroups, setEggGroups] = useState([]);
  const [habitat, setHabitat] = useState("");
  const [growthRate, setGrowthRate] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
      .then((response) => response.json())
      .then((data) => {
        setList(data.results);
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setFlavorText(
          data.flavor_text_entries[1].language.name === "en"
            ? data.flavor_text_entries[1].flavor_text.replace(/[\n\f]/g, " ")
            : data.flavor_text_entries[6].language.name === "en" &&
                data.flavor_text_entries[6].flavor_text.replace(/[\n\f]/g, " ")
        );
        setEggGroups(data.egg_groups);
        setHabitat(data.habitat.name.replace(/-/g, " "));
        setGrowthRate(data.growth_rate.name);
      });
  }, [index]);

  return (
    <div className="app">
      <Select setIndex={setIndex} index={index} list={list} />
      <Card
        index={index}
        name={name}
        description={flavorText}
        group={eggGroups}
        habitat={habitat}
        rate={growthRate}
      />
      <Button setIndex={setIndex} index={index} />
    </div>
  );
};

export default App;
