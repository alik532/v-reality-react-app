import React from 'react'
import classes from '../styles/Header.module.css'
import logo from '../assets/logo.svg'
import burgerSvg from '../assets/burger.svg'
import MyModal from './MyModal'
import { useState } from 'react'

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={classes.header}>
      <div className={classes.navbar}>
        <a href="/" className={classes.logo}>
          <img src={logo} alt="" />
        </a>
        <div className={classes.links}>
          <a href="#about">
            <h4>О клубе</h4>
          </a>
          <a href="#halls">            
            <h4>Залы</h4>
          </a>  
          <a href="#toPlay">          
            <h4>Игры</h4>
          </a>
          <a href="#contacts">          
            <h4>Контакты</h4>
          </a>
        </div>
      </div>
      <MyModal isOpen={isModalOpen} setIsOpen={() => setIsModalOpen(prev => !prev)}>
        <a href="#about" className={classes.modalLink}>
            <h4>О клубе</h4>
          </a>
          <a href="#halls" className={classes.modalLink}>            
            <h4>Залы</h4>
          </a>  
          <a href="#toPlay" className={classes.modalLink}>          
            <h4>Игры</h4>
          </a>
          <a href="#contacts" className={classes.modalLink}>          
            <h4>Контакты</h4>
          </a>
      </MyModal>
      <div className={classes.book} >
        <a href="/" className={classes.bookButton}>
          <h4>Забронировать</h4>
        </a>
        <h4>8 (925)880-15-12</h4>
        <img src={burgerSvg} alt="" className={classes.burger} onClick={() => setIsModalOpen(true)}/>
      </div>
    </div>
  )
}

export default Header