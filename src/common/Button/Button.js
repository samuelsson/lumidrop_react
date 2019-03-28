import React from 'react';
import './Button.scss';

const TYPES = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    WARNING: 'warning',
    SUCCESS: 'success'
};

const BaseButton = ({ text, onClick, type = 'button', disabled, buttonType, fullWidth, ghost }) => {
    const buttonClass = ghost ? `button-${buttonType}-ghost` :`button-${buttonType}`;
    const styles = fullWidth && { display: 'block', width: '100%' };

    return (
        <button type={type}
                disabled={disabled}
                onClick={onClick}
                style={styles}
                className={buttonClass}>
            {text}
        </button>
    );
};

export const Default = props => (<BaseButton { ...props } buttonType={TYPES.DEFAULT} />);
export const Primary = props => (<BaseButton { ...props } buttonType={TYPES.PRIMARY} />);
export const Warning = props => (<BaseButton { ...props } buttonType={TYPES.WARNING} />);
export const Success = props => (<BaseButton { ...props } buttonType={TYPES.SUCCESS} />);