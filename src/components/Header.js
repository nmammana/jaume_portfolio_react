import React from 'react'

import './styles/Header.css'

export default function Header() {
    return (
        <header>
            <nav className="nav_bar flex_center">
                <div className="logo logo_font">LOGO</div>
                <button className="button_primary button_font curriculum">currículum</button>
                <ul className="top_nav">
                    <li className="button_font"><a className="hola" href="#presentation">Hola</a></li>
                    <li className="button_font"><a className="proyectos" href="#intro">PROYECTOS</a></li>
                    <li className="button_font"><a className="hablemos" href="#contact">HABLEMOS</a></li>
                </ul>
            </nav>
        </header>
    )
}
