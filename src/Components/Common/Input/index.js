import React, { useState } from 'react';
import showPwdImg from '../../../assets/show-password.svg';
import hidePwdImg from '../../../assets/hide-password.svg';
import './Input.scss';

const Input = ({
    label,
    type,
    placeholder,
    value,
    onChange,
    error
}) => {

    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const isPassword = type === 'password';
    return (
        <div className='ds-input'>
            <label>{label}</label>
            <div className='ds-input-wrapper'>
                <input 
                    type={(isPassword && isRevealPwd) ? 'textbox'  :type} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={(e) => onChange(e?.target?.value)}
                    className={error && 'Error'}
                />
                {
                    isPassword && 
                    <img
                        alt={isRevealPwd ? "Hide password" : "Show password"}
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    />
                }
            </div>
            {error && <span className='error-message'>{error}</span>}
        </div>
    )
}

export default Input;
