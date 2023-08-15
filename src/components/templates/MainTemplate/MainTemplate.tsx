import React from 'react';
import './MainTemplate.module.css';

const MainTemplate: React.FC = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MainTemplate;
