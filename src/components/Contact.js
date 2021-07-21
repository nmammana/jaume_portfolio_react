import React from 'react'

import '../styles/Contact.scss'

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <span className="title_contact title headline5">HABLEMOS</span>
            <p className="invitation body1">Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
            <form action="">
                <label className="form_label required body1" htmlFor="name">Nombre completo</label><br/>
                <input className="input_field body1" type="text" name="name" placeholder="Juan" readOnly/><br/>
                <label className="form_label required body1" htmlFor="email">Correo electrónico</label><br/>
                <input className="input_field body1" type="email" name="email" placeholder="Juan@gmail.com" readOnly/><br/>
                <label className="form_label body1" htmlFor="message">Mensaje</label><br/>
                <input className="input_field body1 message_input" type="text" name="message" value="" readOnly/>
                <input className="button_primary button_font button_enviar" type="submitt" name="enviar" value="ENVIAR MENSAJE" readOnly/>
            </form>
        </section>
    )
}
