import React, { useState, useTransition } from "react";

const Index = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <div>大家好：我是小杜~</div>
      输入框：{" "}
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          startTransition(() => {
            const res = [];
            for (let i = 0; i < 2; i++) {
              res.push(e.target.value);
            }
            setList(res);
          });
        }}
      />
      {isPending ? (
        <div>加载中...</div>
      ) : (
        list.map((item, index) => <div key={index}>{item}</div>)
      )}
    </div>
  );
};

export default Index;
