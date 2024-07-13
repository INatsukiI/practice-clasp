import { useState } from "react";
import "./App.css";
import { getGreeting } from "./api/hello";

function App() {
  const [greet, setGreet] = useState("");
  const handleButtonClick = async () => {
    const response = await getGreeting();
    setGreet(response.message);
  };

  return (
    <div className="App">
      <button type="button" onClick={handleButtonClick}>
        挨拶
      </button>
      <p>{greet}</p>
    </div>
  );
}

export default App;
