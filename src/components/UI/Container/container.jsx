import React from 'react';
import container from './Container.module.css';

function UIContainer({children}){
    return (
        <div className={container.UIContainer}>
            {children}

        </div>
    )
}

export default UIContainer;