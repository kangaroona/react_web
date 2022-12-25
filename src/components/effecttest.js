import React, { useState, useEffect } from "react";
import { Button } from "antd-mobile";

const Child = () => {
  useEffect(() => {
    console.log("挂载");

    return () => {
      console.log("卸载");
    };
  }, []);

  return <div>大家好，我是小杜杜</div>;
};

const Index = () => {
  const [flag, setFlag] = useState(false);
  console.log("flag", flag);
  return (
    <div style={{ padding: 20 }}>
      <Button
        color="primary"
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        {flag ? "卸载" : "挂载"}
      </Button>
      {flag && <Child />}
    </div>
  );
};

export default Index;
