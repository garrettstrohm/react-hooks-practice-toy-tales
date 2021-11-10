import React, {useState} from "react";
// {
//   "id": 1,
//   "name": "Woody",
//   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//   "likes": 8
// }


function ToyForm({ onFormSubmit }) {

  const [toyData, setToyData] = useState({
    id: "",
    name: "",
    image: "",
    likes: 0,
  })

  function handleChange(e){
    setToyData({...toyData, [e.target.name]: e.target.value})
  }

  function handleSubmit(toyData){
    onFormSubmit(toyData)
  }
console.log(toyData)
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={() => handleSubmit(toyData)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name= "name"
          value={toyData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={toyData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
