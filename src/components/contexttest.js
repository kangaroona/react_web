import React, { useState } from "react";

const Content = React.createContext();

const Child = () => {
  return (
    <>
      <div style={{ border: "1px solid" }}>
        child
        <Son type="son">
          <p>大家好，我是小杜杜1</p>
          <p>大家好，我是小杜杜2</p>
          <p>大家好，我是小杜杜3</p>
        </Son>
      </div>
    </>
  );
};

const Son = (props) => {
  const res = React.Children.map(props.children, (item) => item);
  console.log(res);
  return (
    <Content.Consumer>
      {(value) => (
        <>
          <div>大家好，我是{value.name}</div>
          <div>幸运数字是：{value.number}</div>
          {props.children}
        </>
      )}
    </Content.Consumer>
  );
};

const Index = () => {
  const [data, _] = useState({
    name: "小杜杜",
    number: 7,
  });

  return (
    <div style={{ padding: 20 }}>
      <Content.Provider value={data}>
        <Child />
      </Content.Provider>
    </div>
  );
};

export default Index;
