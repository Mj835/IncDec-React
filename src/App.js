import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

export default function App() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Sorry, Zero is limit !");
      setNum(0);
    }
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1> {num} </h1>
        <div className="btn_div">
          <Tooltip title="Add" aria-label="add">
            <Button className="btn_green" onClick={incNum}>
              <AddIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Delete" aria-label="delete">
            <Button className="btn_red" onClick={decNum}>
              <RemoveIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
