import { useState } from "react";
import { Child } from "./components/Child";
import "./styles.css";

export default function App() {
  console.log("reflesh");

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <Child open={open} />
    </div>
  );
}
