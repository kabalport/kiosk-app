import React from 'react';
import './Button.module.css';

type ButtonProps = {
    label: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default Button;
