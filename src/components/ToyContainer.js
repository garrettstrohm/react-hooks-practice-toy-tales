import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, handleDeleteToy, onUpdatedLikes}) {

  const toyCards = toyList.map(toy => <ToyCard key={toy.id} toy={toy} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} handleDeleteToy={handleDeleteToy} onUpdatedLikes={onUpdatedLikes}/>)

  return (
    <div id="toy-collection">{toyCards}</div>
    
  );
}

export default ToyContainer;
