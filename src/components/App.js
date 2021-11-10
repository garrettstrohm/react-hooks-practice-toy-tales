import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const[toyList, setToyList] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => {
      setToyList(data)
    })
  }, [])

  function onFormSubmit(newToy) {
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(newToy => {
      setToyList([...toyList, newToy])
    })
  }

  function handleDeleteToy(deletedToy){
    const updatedToys = toyList.filter((toy) => toy.id !== deletedToy.id)
    setToyList(updatedToys)
  }

  function onUpdatedLikes(updatedToy){
    const updatedToys = toyList.map((toy) => {
      if(toy.id === updatedToy.id){
        return updatedToy
      } else {
        return toy
      }
    });
    setToyList(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={onFormSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} handleDeleteToy={handleDeleteToy} onUpdatedLikes={onUpdatedLikes}/>
    </>
  );
}

export default App;
