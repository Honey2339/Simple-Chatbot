import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userMessage, setUserMessage] = useState("");

  const handleSend = (e: any) => {
    e.preventDefault();
    const res = axios
      .post("http://localhost:5000/openapi", { userMessage: userMessage })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>ChatBot</h1>
      <div className="main-container">
        <input
          placeholder="send message"
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
