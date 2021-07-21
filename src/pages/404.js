import React from 'react'
import '../styles/NotFound.scss'

import notFound from '../assets/images/404.png'

export default function NotFound() {
    return (
        <div className = "notFoundContainer" >
            <span className="picContainer"><img src={notFound} alt="Error 404 NotFound"></img></span>   
            <h1 className="titleError"> Error 404: Page Not Found</h1>
        </div>
    )
}
