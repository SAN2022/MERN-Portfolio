import QuizApp from '../assets/Web_Images/Quiz.png';
import QR from './../assets/Web_Images/QR.png';
import dashboard from './../assets/Web_Images/dashboard.png';
import { motion } from "motion/react";

const miniProjectDetails = [
    {
        name: 'Quiz Application',
        description: 'Multi choice Quiz Application with timer and score',
        img: QuizApp,
        github_link: 'https://github.com/SAN2022/Quiz-application',
        live: 'https://san2022.github.io/Quiz-application/'
    },
    {
        name: 'QR Code Generator',
        description: 'Get QR Code for your given data',
        img: QR,
        github_link: 'https://github.com/SAN2022/QR-Code-Generator',
        live: 'https://san2022.github.io/QR-Code-Generator/'
    },
    {
        name: 'Leads Dashboard (UI)',
        description: 'Responsive Leads Dashboard UI',
        img: dashboard,
        github_link: 'https://github.com/SAN2022/Leads-Dashboard',
        live: 'https://leads-dashboard-nu.vercel.app/'
    }
]
export default function MiniProjects(){
    return (
        <>
            <div 
            className="container" id='mini-projects'>
            <div className="row">
                <h2 className="text-center mt-5">Mini Projects</h2>
                <div className="col-md-12 mini-projects">
                    {
                        miniProjectDetails.map((project, index)=>(
                            <div className="card mt-3" style={{width: "18rem"}} key={index}>
                                <img src={project.img} className="card-img-top" alt="crud.png" width={'100%'} height={'250px'}/>
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.live} target="_blank" className="btn btn-primary me-2">View Project</a>
                                    <a href={project.github_link} target="_blank" className="btn btn-primary">View Code</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </div>
        </>
    )
}