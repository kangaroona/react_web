import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useContext,
  useId,
  useMemo,
} from "react";
// import { setTimeout } from 'timers/promises';
// import { isTemplateExpression } from 'typescript';
import "./clock1.css";
import { selectArr, divStyle } from "./selectdata";
import { clock1Reducer } from "./clock1reducer";
const clockContext = React.createContext();
function formateTime(time) {
  return `curTime: ${time.toLocaleTimeString()}`;
}
const SelectItem = React.memo(({ defalut }) => {
  // console.log(ThemeContext);
  useEffect(() => {
    console.log("trigger.....");
  });
  // const selectArr = [{id:'apple',cn:'苹果'},{id:'pear',cn:'🍐'},{id:'orange',cn:'🍊'}];
  return selectArr
    .filter((curItem) => {
      return curItem.id !== defalut;
      // return (
      //   curItem.id==='pear' &&
      //     <option value={curItem.id}>{curItem.cn}</option>
      // )
    })
    .slice(0, 2)
    .map((curItem1) => (
      <option value={curItem1.id} key={curItem1.id}>
        {curItem1.cn}
      </option>
    ));
  // <OptionItem value={curItem} key={curItem.id}/>
  // <option value={curItem.id}>{curItem.cn}</option>
});
function ListItem({ value }) {
  // console.log("consumer", useContext(clockContext));
  return <li>{value}</li>;
}
function doubled(numbers) {
  return numbers.map((number) => (
    <ListItem key={"li" + number} value={number} />
  ));
}
function WrapperClock({ name }) {
  const curClockId = useId();
  if (name.length) {
    return (
      <div style={divStyle} id={curClockId}>
        {name}
        <ul>{doubled([1, 2])}</ul>
      </div>
    );
  } else return <div>{"abc"}</div>;
}
function Clock1(props) {
  const [date, setDate] = useState(new Date());
  const [num, setNum] = useState(0);
  const [name, setName] = useState(props.name);

  const initState = {
    num: 0,
    value: 0,
    name: props.name,
  };
  const [newState, dispatch] = useReducer(clock1Reducer, initState);
  let timer = useRef();
  const refDiv = useRef();
  function refreshClock(num) {
    setDate(new Date());
    setNum((num) => {
      return num + 1;
    });
  }
  //run after  render,if secondParam is [],run after first render
  //else if secondPara is specific value, run depend on the value
  //初始化监听和初始化执行一些方法时候，使用该hook
  //操作副作用（widow对象上的，去数据等）
  useEffect(() => {
    console.log("in useEffect hook refDiv.current", refDiv.current);
    timer.current = setInterval(refreshClock, 1000);
    console.log("usereffect hook trigger");
    return function cleanup() {
      clearInterval(timer.current);
    };
  }, []);
  // console.log('refDiv render...',refDiv.current)
  function handle(e) {
    // console.log(e.arget);
    // console.log(value);
    console.log(refDiv.current);

    // setValue((oldV)=>{
    //   setTimeout(()=>{value+1},1000);
    //   return oldV+1;
    //   // return name+'runrun';
    // })
    setTimeout(() => {
      document.title = "react demo";
      dispatch({ type: "addValue", payload: { count: 6 } });
      // setValue((oldV)=>{
      //   return oldV+1
      // })
    }, 2000);
  }
  function stopTimer() {
    setNum(0);
    clearInterval(timer.current);
  }

  return (
    <>
      <div>
        <clockContext.Provider value={name}>
          <WrapperClock name={name} />
        </clockContext.Provider>
        {/* {name.length>0 ? name : 'abc'} */}
      </div>
      <h1>{newState.value}</h1>
      <select>
        <SelectItem defalut="pear" />
      </select>
      <span>{formateTime(date)}</span>
      <span>{num}</span>
      <div onClick={(e) => handle(e)} ref={refDiv}>
        确定
      </div>
      <div onClick={() => stopTimer()}>停止</div>
    </>
  );
}
export default Clock1;
