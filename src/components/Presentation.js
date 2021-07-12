import React from 'react'

import Icons from './Icons';

import './styles/Presentation.css';

/***** Images *****/
import user from '../images/user.png'

export default function Presentation() {
    return (
        <section className="presentation" id="presentation">
            <div className="presentation_picture flex_center"><img src={user} alt="user_pic"></img></div>
            <div className="presentation_text">
                <h2 className=" headline5">¡Hola a todos!</h2>
                <h1 className="headline3">Soy Jaume</h1>
                <p className= "body1">Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.</p>
                <Icons/>
                <button className="button_primary button_font descargar_cv">Descargar currículum</button>
            </div>
        </section>
    )
}
