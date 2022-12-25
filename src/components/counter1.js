import React, { useState, useCallback, useMemo } from "react";
import { Button } from "antd-mobile";

const MockMemo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  console.log("mockMemo===");
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const memoizedValue = useMemo(() => {
    return <TestBtn memoizedValue="tigger me" />;
  }, [show]);
  return useMemo(
    () => (
      <div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <TestButton title="普通点击" onClick={() => setCount((v) => v + 1)} />
          <TestButton title="useCallback点击" onClick={add} />
          {memoizedValue}
        </div>
        <div style={{ marginTop: 20 }}>count: {count}</div>
        <Button
          onClick={() => {
            setShow(!show);
          }}
        >
          {" "}
          切换
        </Button>
      </div>
    ),
    [count]
  );
};

const TestButton = React.memo((props) => {
  console.log(props.title);
  return (
    <Button
      color="primary"
      onClick={props.onClick}
      style={
        props.title === "useCallback点击"
          ? {
              marginLeft: 20,
            }
          : undefined
      }
    >
      {props.title}
    </Button>
  );
});
const TestBtn = (props) => {
  console.log("testBtn", props);
  return (
    <Button color="primary" style={{ marginLeft: 20 }}>
      {props.memoizedValue}
    </Button>
  );
};
export default MockMemo;
