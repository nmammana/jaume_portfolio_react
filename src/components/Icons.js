import React from 'react'

/*import './styles/portfolio.css'*/
import '../styles/icons.scss'

/***** Images *****/
import iconPhone from '../assets/images/icon-phone.png'
import iconMail from '../assets/images/icon-mail.png'
import iconIg from '../assets/images/icon-instagram.png'
import iconTw from '../assets/images/icon-twitter.png'

export default function Icons() {
    return (
        <ul className="icons iconsFooter">
            <li className="icon flex_center"><img src= {iconPhone} alt=""></img></li>
            <li className="icon flex_center"><img src={iconMail} alt=""></img></li>
            <li className="icon flex_center"><img src={iconIg} alt=""></img></li>
            <li className="icon flex_center"><img src={iconTw} alt=""></img></li>
        </ul>
    )
}


