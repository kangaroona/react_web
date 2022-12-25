import React, { useState, useImperativeHandle, useRef } from "react";
import { Button } from "antd-mobile";

const Child = ({ cRef, initCount }) => {
  const [count, setCount] = useState(initCount);

  useImperativeHandle(cRef, () => ({
    add,
  }));

  const add = () => {
    setCount((v) => v + 1);
  };
  console.log(cRef.current);
  return (
    <div style={{ marginBottom: 20 }}>
      <p>点击次数：{count}</p>
      <Button color="primary" onClick={() => add()}>
        加1
      </Button>
    </div>
  );
};

const Index = () => {
  const ref = useRef(null);
  console.log(ref);
  const initCount = 0;
  return (
    <div style={{ padding: 20 }}>
      <div>大家好，我是小杜杜</div>
      <div>注意:是在父组件上的按钮，控制子组件的加1哦～</div>
      <Button color="primary" onClick={() => ref.current.add()}>
        父节点上的加1
      </Button>
      <Child cRef={ref} initCount={initCount} />
    </div>
  );
};

export default Index;
