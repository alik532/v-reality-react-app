import React from 'react'
import classes from '../styles/MyButton.module.css'

const MyButton = ({text}) => {
  return (
    <button className={classes.button}>
        {text}
    </button>
  )
}

export default MyButton