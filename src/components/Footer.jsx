import React from 'react'
import classes from '../styles/Footer.module.css'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <img src={logo} alt=""  className={classes.logo}/>
        <div className={classes.items} >
            <h5>
                Политика конфиденциальности
            </h5>
            <h5>Обработка персональных данных</h5>
        </div>
    </div>
  )
}

export default Footer