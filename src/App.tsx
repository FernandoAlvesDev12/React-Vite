import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [count, setCount] = useState(0);
  const [texts, setTexts] = useState<string[]>([]);

  return (
    <>
      <h1>Home</h1>
      <button onClick={Somar}>count is {count}</button>
      {texts.map((text) => (
        <Card text={text}></Card>
      ))}
    </>
  );

  function Somar() {
    setCount((count) => count + 1);
    setTexts((texts) => [...texts, `Teste ${count + 1}`]);
  }
}

export default App;
