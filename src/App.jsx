import React,{useState} from 'react'


import Text from './assets/ui/Text/text'
import Button from './assets/ui/Button/Button.jsx'
function App() {
  const[count,setCount] = useState(0)
  
  const add = ()=>{
    setCount(count+1)
  }
  const minus = ()=>{
    setCount(count-1)
  }
  const multiply = ()=>{
    setCount(count*count)
  }
  const devide = ()=>{
    setCount(count/count)
  }
  const zero = ()=>{
    setCount(0)
  }
  return (<>
   
     <Text>{count}</Text>
    <Button click={()=>add()} text="+"></Button>
    <Button click={()=>minus()} text="-"></Button>
    <Button click={()=>multiply()} text="*"></Button>
    <Button click={()=>devide()} text="/"></Button>
    <Button click={()=>zero()} text="0"></Button>
    {/* <button  onClick={()=>add()}>+</button>
    <button onClick={()=>minus()}>-</button>
    <button onClick={()=>multiply()}>*</button>
    <button onClick={()=>devide()}>/</button>
    <button onClick={()=>zero()}>0</button>
     */}
    
  </>)
}

App.propTypes = {}

export default App
