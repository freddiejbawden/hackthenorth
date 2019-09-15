import React, { Component } from 'react'
import './Button.scss'

const Button = (props) => {
  let classes = "button "
  if (props.color === 'blue') {
    classes += "blue"
  } else {
    classes += "red"
  }
  return(

    <div onClick={props.onClick} className={classes}>{props.text}</div>
  )
}
export default Button;
