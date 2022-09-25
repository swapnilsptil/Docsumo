import React from 'react';
import './Button.scss';

const Button = ({
    onClick,
    title
}) => {
  return (
    <div className='ds-button'>
        <button onClick={onClick}>
            {title}
        </button>
    </div>
  )
}

export default Button;
