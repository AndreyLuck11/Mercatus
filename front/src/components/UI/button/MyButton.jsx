import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            <div className={classes.dscr}>{children}</div>
        </button>
    );
};

export default MyButton;