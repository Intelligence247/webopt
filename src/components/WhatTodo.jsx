import React from "react";
import Ceo from "./Ceo";
import "./WhatTodo.css";

const WhatTodo = () => {
  return (
    <div className="whatWrapper">
      <h1>Don't just take our words</h1>
      <div className="bothceo">
        <Ceo
          img={"/media/BG.png"}
          text={
            "I love the flexibility and customization options of the platform"
          }
          name={"Aderin"}
          qual={"CEO Mimi"}
          name2={"Esther"}
          qual2={"Hairs"}
        />
        <Ceo
          img={"/media/bg1.png"}
          text={"The support team is amazing and always available to help! -"}
          name={"Devon"}
          qual={"Ceo"}
          name2={"Lane"}
          qual2={"Glasshub"}
        />
      </div>
    </div>
  );
};

export default WhatTodo;
