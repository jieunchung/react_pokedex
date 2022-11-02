import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Select from "./components/Select";

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
        console.log(data.flavor_text_entries[6].language.name);
        setName(data.name);
        setFlavorText(
          data.flavor_text_entries[1].language.name === "en"
            ? data.flavor_text_entries[1].flavor_text.replace(/\n/g, " ")
            : data.flavor_text_entries[6].language.name === "en" &&
                data.flavor_text_entries[6].flavor_text.replace(/\n/g, " ")
        );
        setEggGroups(data.egg_groups);
        setHabitat(data.habitat.name);
        setGrowthRate(data.growth_rate.name);
      });
  }, [index]);

  return (
    <div>
      <Select setIndex={setIndex} index={index} list={list} />
      <Card
        index={index}
        name={name}
        description={flavorText}
        group={eggGroups}
        habitat={habitat}
        rate={growthRate}
      />
    </div>
  );
};

export default App;
