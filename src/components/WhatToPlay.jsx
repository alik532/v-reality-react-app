import React from 'react'
import classes from '../styles/WhatToPlay.module.css'
import { useState } from 'react'
import leftArrow from '../assets/leftArrow.png'
import rigthArrow from '../assets/rigthArrow.png'
import { games1, games2 } from '../data'

const WhatToPlay = () => {

    const genreList = [{genre: "popular", list: games1}, {genre: "fps", list: games2}, {genre: "coop", list: games1}, {genre: "horror", list: games2}, {genre: "fantasy", list: games1}, {genre: "forChildren", list: games2}]
    const [genre, setGenre] = useState("popular")
    const [selectedGame, setSelectedGame] = useState(1)

    return (
        <div className={classes.root}>
            <h1 className={classes.title} id='toPlay'>Во что поиграть</h1>
            <div className={classes.content}>
                <div className={classes.genreList}>
                    <h4 className={classes.genre} style={genre === "popular" ? {color: "#e32967"} : {color: "gray"}} onClick={() => setGenre("popular")}>
                        Популярное {"->"}
                    </h4>
                    <h4 className={classes.genre} style={genre === "fps" ? {color: "#e32967"} : {color: "gray"}} onClick={() => setGenre("fps")}>
                        Шутеры {"->"}
                    </h4>
                    <h4 className={classes.genre} style={genre === "coop" ? {color: "#e32967"} : {color: "gray"}} onClick={() => setGenre("coop")}>
                        Групповые {"->"}
                    </h4>
                    <h4 className={classes.genre} style={genre === "horror" ? {color: "#e32967"} : {color: "gray"}} onClick={() => setGenre("horror")}>
                        Хорроры {"->"}
                    </h4>
                    <h4 className={classes.genre} style={genre === "fantasy" ? {color: "#e32967"} : {color: "gray"}} onClick={() => setGenre("fantasy")}>
                        Творческие {"->"}
                    </h4>
                    <h4 className={classes.genre} style={genre === "forChildren" ? {color: "#e32967"} : {color: "gray"}} onClick={() => setGenre("forChildren")}>
                        Детские {"->"}
                    </h4>
                </div>
                <div className={classes.gameList}>
                    <img src={leftArrow} alt="" className={`${classes.arrow} ${classes.leftArrow}`} onClick={selectedGame !== 0 ? () => setSelectedGame(prev => prev-1) : () => setSelectedGame(2)}/>
                        <div className={classes.gameCards}>
                            {genreList.find(gen => gen.genre === genre).list.map((game, indx) => (
                                <div className={indx !== selectedGame ? `${classes.gameCard} ${classes.unselected}` : `${classes.gameCard} ${classes.selected}`}>
                                    <img src={game.img} alt='' className={classes.gameImg}/>
                                </div>
                                )
                            )}
                        </div>
                    <img src={rigthArrow} alt="" className={`${classes.arrow} ${classes.rightArrow}`} onClick={selectedGame !== 2 ? () => setSelectedGame(prev => prev+1) : () => setSelectedGame(0)}/>
                </div>
            </div>
        </div>
    )
}

export default WhatToPlay