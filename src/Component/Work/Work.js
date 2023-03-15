import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import WorkCard from '../WorkCard/WorkCard';
import './Work.css';
import projectData from './WorkData';





import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Work = (props) => {
const [project,setProject] = useState(projectData);
    return (
        <div className='work-container'>
          <h1 className='project-heading'>Services</h1>
          {/* <div className='project-container'>
            {
                project.map((project) =>{
                    return(
                        <WorkCard project={project}/>
                    )
                })
            }
          </div> */}
         
         <div className="project-container">
         <Container className='ak'>
         <Row>
        <Col sm>
        {
                project.map((project) =>{
                    return(
                        <WorkCard project={project}/>
                    )
                })
            }
        </Col>
        </Row>
         </Container>
         </div>
         




        </div>

    );
};

export default Work;