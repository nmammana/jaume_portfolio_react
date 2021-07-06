import React from 'react'

import ProjectCard from './ProjectCard'

const ProjectsList = ({projects}) => (
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
                        
                    />
                )
            })
        }
    </div>
)

/*var section = document.getElementById("project")

if(imageFirst){
    section.setAttribute('style', 'background-color: red')
}*/



   

export default ProjectsList