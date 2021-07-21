import React from 'react'

import Icons from '../components/Icons'

import '../styles/Footer.scss'

import iconHeart from  '../assets/images/icon-heart.png'


export default function Footer() {
    return (
        <footer>
            <Icons/>
            <div className="text_container">
                <p className="goodbye body1 flex_center ">Hecho con <span><img src= {iconHeart} alt=""></img></span> de Jaume.<span className="to_hide"> Copyright 2021 - Todos los derechos reservados.</span></p>
                <p className="copyright body1">Copyright 2021 - Todos los derechos reservados.</p>
            </div>
            <div className="logo logo_font">LOGO</div>
        </footer>
    )
}


