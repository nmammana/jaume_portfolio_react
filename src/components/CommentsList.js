import React from 'react'

import CommentsCard from './CommentsCard'

const CommentsList = ({comments}) => (
    <div>
        {
            comments.map((comment)=>{
                return(
                    <CommentsCard
                        key={comment.id}
                        projectImg={comment.projectImg}
                        title={comment.title}
                        description={comment.description}
                        buttonFirst={comment.buttonFirst}
                        buttonSecond={comment.buttonSecond}
                        profileImg={comment.img}
                        comment={comment.comment}
                        client={comment.client}
                    />
                )
            })
        }
        </div>
)

export default CommentsList