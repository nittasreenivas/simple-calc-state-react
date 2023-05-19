import { useState } from "react";
export default function Simple() {
  const [res, setRes] = useState(0);
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const handleA = (e) => {
    setA(Number(e.target.value));
  };
  const handleB = (e) => {
    setB(Number(e.target.value));
  };
  const handleAdd = () => {
    setRes(A + B);
  };
  const handleSub = () => {
    setRes(A - B);
  };
  const handleMul = () => {
    setRes(A * B);
  };
  const handleDiv = () => {
    setRes(A / B);
  };
  return (
    <div>
      <input type="text" placeholder="enter a value" onChange={handleA} />
      <br />
      <input type="text" placeholder="enter b value" onChange={handleB} />
      <br />
      <button onClick={handleAdd}> ADD</button>&nbsp;
      <button onClick={handleSub}> SUB</button>&nbsp;
      <button onClick={handleMul}> MUL</button>&nbsp;
      <button onClick={handleDiv}>DIV</button>&nbsp;
      <h3> the result is {res}</h3>
    </div>
  );
}
