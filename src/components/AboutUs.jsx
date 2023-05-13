import React from 'react'
import classes from '../styles/AboutUs.module.css'
import aboutImg from '../assets/about.png'

const AboutUs = () => {
  return (
    <div className={classes.about}>
        <h1 className={classes.title} id='about'>О нашем клубе</h1>
        <div className={classes.content}>
            <img src={aboutImg} alt="" className={classes.img}/>
            <div className={classes.texts}>
                <h2>Vreality - один из первых клубов виртуальной реальности в Москве.</h2>
                <h4>Наш клуб виртуальной реальности начал свою деятельность не так давно. Тем не менее, мы уверены - вскоре о нас узнают далеко за пределами компьютерных залов.</h4>
                <h4>Мы делаем виртуальные миры доступными каждому, приходите и испытайте эти ощущения сами!</h4>
            </div>
        </div>
    </div>
  )
}

export default AboutUs