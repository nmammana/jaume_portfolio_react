import React from 'react'

import ProjectCard from './ProjectCard'

export default function ProjectsList({projects}) {
    return (
        <div>
            {
                projects.map((project)=>{
                    return(
                        <ProjectCard
                            key={project.id}
                            projectImg={project.projectImg}
                            title={project.title}
                            description={project.description}
                            buttonFirst={project.buttonFirst}
                            buttonSecond={project.buttonSecond}
                            profileImg={project.img}
                            comment={project.comment}
                            client={project.client}
                            imageFirst={project.imageFirst}
                            imgSize={project.imgSize}
                        />
                    )
                })
            }
        </div>
    )
}

