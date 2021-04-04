import { useState } from "react";
import Greeting from "../greeting";

import Button from "../ui/button";
// import { Button } from "../ui";

import "./counter.css";

function Counter(props) {
  const [count, setCount] = useState(0);

  const onButtonClick = ({ target }) => {
    // oldValue !== newValue
    // oldObject !== newObject
    setCount(0);
  };

  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const changeColor = (bg, font) => { setBackgroundColor(bg); setFontColor(font) }

  return (
    <div className="row counter-container">
      <Greeting title="Counter" description={count} />
      <div className="col-12">
        <Button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setCount(count + 1)}
          text="+1"
        />

        <Button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setCount(count + 5)}
          text="+5"
        />
        
        <Button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setCount(count + 100)}
          text="+100"
        />

        <Button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setCount(count - 100)}
          text="-100"
        />


        <Button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setCount(count - 5)}
          text="-5"
        />

        <Button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => setCount(count - 1)}
          text="-1"
        />

        <Button
         type="button"
         className="btn btn-dark"
         onClick={() => changeColor("blue", "red")}
         text="red"
        />
        
        <Button
         type="button"
         className="btn btn-light"
         onClick={() => changeColor("black", "chartreuse")}
         text="chartreuse"
        />

        <Button
         type="button"
         className="btn btn-primary"
         onClick={() => changeColor("black", "aquamarine")}
         text="aquamarine"
        />
        
        <Button
         type="button"
         onClick={() => changeColor("black", "azure")}
         text="azure"
        />
        
        <Button
         type="button"
         onClick={() => changeColor("antiqueWhite", "black")}
         text="antiqueWhite"
        />
        
        <Button
         type="button"
         onClick={() => changeColor("aliceBlue", "black")}
         text="AliceBlue"
        />
        


      </div>
    </div>
  );
}

export default Counter;
