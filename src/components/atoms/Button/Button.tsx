import React from 'react';
import './Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};


// components/atoms/Button/Button.tsx

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>;
};

export default Button;
