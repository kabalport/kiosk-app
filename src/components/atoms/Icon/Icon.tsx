import React from 'react';

// Example: Home Icon
const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
            <path d="M10 20v-6h4v6h5v-8h3l-10-9-10 9h3v8z"></path>
        </svg>
    );
};

// Example: Cart Icon
const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
            <path d="M7 4v2h10V4h2v2h1a1 1 0 0 1 1 1v1h-2v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V7a1 1 0 0 1 1-1h1V4h2z"></path>
        </svg>
    );
};

// ... add more icons as needed

export {
    HomeIcon,
    CartIcon,
    // ... other icons
};
