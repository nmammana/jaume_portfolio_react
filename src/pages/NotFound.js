import React from 'react'
import '../components/styles/NotFound.css'

import notFound from '../images/404.png'

export default function NotFound() {
    return (
        <div className = "notFoundContainer" >
            <span className="picContainer"><img src={notFound}></img></span>   
            <h1 className="titleError"> Error 404: Page Not Found</h1>
        </div>
    )
}
