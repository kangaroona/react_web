import React, { useReducer } from "react";
import { Button } from "antd-mobile";
import Counter1 from "./counter1";
const countInit = {
  init: 0,
  step: 1,
};
const Index = () => {
  const [count, dispatch] = useReducer((state, action) => {
    // console.log(state, action);
    switch (action?.type) {
      case "add":
        return { ...state, init: state.init + action?.payload };
      case "sub":
        return { ...state, init: state.init - action?.payload };
      default:
        return { ...state, ...countInit };
    }
  }, countInit);

  return (
    <div style={{ padding: 20 }}>
      <div>count：{count.init}</div>
      <Button
        color="primary"
        onClick={() => dispatch({ type: "add", payload: count.step })}
      >
        加1
      </Button>
      <Button
        color="primary"
        style={{ marginLeft: 8 }}
        onClick={() => dispatch({ type: "sub", payload: count.step })}
      >
        减1
      </Button>
      <Button
        color="primary"
        style={{ marginLeft: 8 }}
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </Button>
      <Counter1 />
    </div>
  );
};

export default Index;
