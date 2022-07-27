import React from 'react';
import classess from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classess.myModal]
    if (visible === true){
        rootClasses.push(classess.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classess.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>
    );
};

export default MyModal;