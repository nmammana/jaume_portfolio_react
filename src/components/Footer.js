import React from 'react'

import './styles/Footer.css'

import Icons from '../components/Icons'

import iconHeart from  '../images/icon-heart.png'


const Footer = () => (
    <footer>
        <Icons/>
        <div class="text_container">
            <p class="goodbye body1 flex_center ">Hecho con <span><img src= {iconHeart} alt=""></img></span> de Jaume.<span class="to_hide"> Copyright 2021 - Todos los derechos reservados.</span></p>
            <p class="copyright body1">Copyright 2021 - Todos los derechos reservados.</p>
        </div>
        <div class="logo logo_font">LOGO</div>
    </footer>
    
)


export default Footer