import React from 'react'

/*import './styles/portfolio.css'*/

/***** Images *****/
import iconPhone from '../images/icon-phone.png'
import iconMail from '../images/icon-mail.png'
import iconIg from '../images/icon-instagram.png'
import iconTw from '../images/icon-twitter.png'

const Icons = () => (
    <ul className="icons iconsFooter">
        <li className="icon flex_center"><img src= {iconPhone} alt=""></img></li>
        <li className="icon flex_center"><img src={iconMail} alt=""></img></li>
        <li className="icon flex_center"><img src={iconIg} alt=""></img></li>
        <li className="icon flex_center"><img src={iconTw} alt=""></img></li>
    </ul>
    
)


export default Icons