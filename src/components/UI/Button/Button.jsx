import React from 'react';
import './Button.css'

function UIButton({children, className, theme, component: Component, ...restProps}){
    return <Component className={`uiButton uiButton--${theme} ${className}`} {...restProps}> {children} </Component>; 
}

UIButton.defaultProps = {
    component: 'a',
    className: '',
    theme: 'bordered-primary'
}

export default UIButton;