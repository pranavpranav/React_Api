import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import ReactDOM from "react-dom";

export default function App() {
  const [photo, setphoto] = useState("");
  const [clientid, setClientid] = useState(
    "97TOFctIGLDABUgPQMIYJ0yZWRliw4eZ2zgcoA5yVvQ"
  );

  const [result, setResult] = useState([]);

  function handleChange(event) {
    setphoto(event.target.value);
  }
  function handleSubmit(event) {
    console.log(photo);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      photo +
      "&client_id=" +
      clientid;
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  }

  return (
    <div className="App">
      <h1>Pranav Photos Search Gallery</h1>
      <input
        onChange={handleChange}
        type="text"
        name="photo"
        placeholder="Search for photos"
      />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>

      {result.map((photo) => (
        <img src={photo.urls.small} />
      ))}
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
