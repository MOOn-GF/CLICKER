import React from 'react'
import st from "./Button.module.css"
function Button(props) {
  return (
    <button onClick={props.click} className={st.red}>{props.text}</button>
  )
}

export default Button