function formateName(str){
  return `__${str}__`;
}
function Welcome(props){
  return <div>hello,{formateName(props.name)}</div>;
}
export default Welcome
