import { useState } from "react";
import "./App.css";

function App() {
  const letters = ["t", "o", "m", "b", "o", "l", "a"];
  const [inputValue, setInputValue] = useState("");
  const [userValue, setUserValue] = useState(false);
  const [correctValue, setCorrectValue] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue) {
      let found = letters.filter((letter) => letter.includes(inputValue));
      if (found.length > 0) {
        console.log("Correct");
        setUserValue(true);
        setCorrectValue((correctValue) => [...correctValue, found]);
        setInputValue("");
      } else {
        console.log("Incorrect");
        setInputValue("");
      }
    }
  };

  const handleDisplay = () => {
    for (let i = 0; i < correctValue; i++) {
      return <h1>{correctValue[i]}</h1>;
    }
  };
  const handleArray = () => {
    if (userValue) {
      let index = letters.indexOf(inputValue);
      console.log("index: ", index);
      if (index !== -1) {
        letters.splice(index, 1);
      }
    }
  };

  console.log("correctValue: ", correctValue);
  //   console.log("updated letters: ", letters);

  return (
    <div className="App">
      <input value={inputValue} onChange={handleChange} />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
      <div className="hangman">
        {correctValue.map((letter, i) => (
          <h2 key={i}>{letter}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;
