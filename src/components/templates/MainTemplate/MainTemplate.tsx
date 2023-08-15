import React from 'react';
import './MainTemplate.module.css';

type MainTemplateProps = {
    children: React.ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MainTemplate;
