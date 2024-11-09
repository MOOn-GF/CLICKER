import React from 'react'
import style from "./Text.module.css"

function text(props) {
  return (
    <h1 className={style.green}>{props.children}</h1>
  )
}

export default text