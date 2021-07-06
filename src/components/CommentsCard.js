import React from 'react';


import './styles/CommentsCard.css'


class CommentsCard extends React.Component {
    render() {
        const {img, comment, client} = this.props
        return (
            <div className="client_comments" >
                <span className="profile_pic flex_center"><img src={img} alt=""></img></span>
                <p className="comment comments_font">{comment}</p>
                <p className="client caption_font">{client}</p>                
            </div>
        )
    }
}

export default CommentsCard;