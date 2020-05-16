import React from 'react';
import './InputField.scss';

const InputField = (props) => (
    <div className="input-container">

      <input className="login-input" type="text" placeholder={props.input_type}/>
    </div>
);

export default InputField;
