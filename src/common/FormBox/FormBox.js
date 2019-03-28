import React from 'react';
import './FormBox.scss'

const FormBox = ({ header, inputs, button, footer }) => {
    const formInputs = inputs.map(({ type, name }, i) => {
        return (
            <label key={i}>
                <span>{name.split('-').join(' ')}</span>
                <input type={type} name={name}/>
            </label>
        )
    });

    return (
        <div className="form-box">
            <div className="header">
                <img className="logo" src={'/images/lumidrop_logo.svg'} alt="lumidrop logo"/>
                <h1>{header}</h1>
            </div>
            <div className="content">
                <form>
                    {formInputs}
                    {button}
                </form>
            </div>
            <div className="footer">
                {footer}
            </div>
        </div>
    );
};

export default FormBox;