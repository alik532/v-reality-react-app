import React from 'react'
import classes from '../styles/HallCard.module.css'
import MyButton from './MyButton'
import borders from '../assets/cardBorder.png'

const HallCard = ({data}) => {
  return (
    <div className={classes.card}>
        <div className={classes.borders} style={{backgroundImage: `url("${borders}")`}}></div>
        <div className={classes.content}>
            <img src={data.img} alt="" className={classes.img}/>
            <div className={classes.texts}>
              <h2 className={classes.name}>{data.name}</h2>
              <h4 className={classes.description}>{data.description}</h4>
              <MyButton text="Забронировать"/>
            </div>
        </div>
    </div>
  )
}

export default HallCard