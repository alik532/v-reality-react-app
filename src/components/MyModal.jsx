import React from 'react'
import classes from '../styles/MyModal.module.css'

const MyModal = ({children, isOpen, setIsOpen}) => {

    const toggle = (e) => {
        e.stopPropagation()
        setIsOpen()
    }

    return (
        <div className={classes.background} style={{display: isOpen ? "initial" : "none"}} onClick={(e) => toggle(e)}>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )

}

export default MyModal