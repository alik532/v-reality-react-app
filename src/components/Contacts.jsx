import React from 'react'
import classes from '../styles/Contacts.module.css'
import GoogleMapReact from 'google-map-react';
import vklogo from '../assets/vk.svg'
import instLogo from '../assets/insta.svg'
import youtubeLogo from '../assets/youtube.svg'

const Contacts = () => {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div className={classes.contacts}>
            <h1 className={classes.title} id='contacts'>КОНТАКТЫ</h1>
            <div className={classes.content}>
                <div className={classes.left}>
                    <h2>АДРЕС</h2>
                    <h4>Москва, метро Виртуальная, ул. Реальность,  3-1</h4>
                    <h2>ТЕЛЕФОН</h2>
                    <h4>+7 (925) 880-15-12</h4>
                    <h2>СОЦИАЛЬНЫЕ СЕТИ</h2>
                    <div className={classes.socials}>
                        <img src={vklogo} alt="" />
                        <img src={instLogo} alt="" />
                        <img src={youtubeLogo} alt="" />
                    </div>
                </div>
                <div className={classes.rigth} >
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <div
                        lat={89.955413}
                        lng={10.337844}
                        text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}

export default Contacts