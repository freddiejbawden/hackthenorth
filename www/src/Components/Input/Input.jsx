import React, { Component } from 'react'
import './Input.scss';
const Input = (props) => {
  return(
    <div className={'input-container'}>
      <label className={'input-label'}>{props.label}</label>
      <input type={props.type} className={'input-box'}></input>
    </div>
  );
}
export default Input;
