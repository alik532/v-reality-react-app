import React from 'react'
import classes from '../styles/GameHalls.module.css'
import HallCard from './HallCard'
import hallImg1 from '../assets/hall1.png'
import hallImg2 from '../assets/hall2.png'
import hallImg3 from '../assets/hall3.png'

const GameHalls = () => {
  return (
    <div className={classes.root}>
        <h1 className={classes.title} id='halls'>Игровые Залы</h1>
        <div className={classes.list}>
            <HallCard data={{img: hallImg1, name: "Розовый зал", description: "Аренда розового зала : 9 VR зон - Standart VR, PS 4 Pro, KAT VR до 10 человек"}}/>
            <HallCard data={{img: hallImg2, name: "Синий зал", description: "В Синем зале расположены : 4 VR зон - Premiun VR (Valve index) до 4 человек"}}/>
            <HallCard data={{img: hallImg3, name: "VR Arena", description: "Совместные игры на площадкe Современный аналог лазертага до 6 человек"}}/>
        </div>
    </div>
  )
}

export default GameHalls