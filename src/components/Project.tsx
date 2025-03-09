import React from "react";
import image1 from '../assets/images/kiruna-explorer.png';
import image2 from '../assets/images/emergency-backup.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Zurehma/SE2-Kiruna_eXplorer" target="_blank" rel="noreferrer"><img src={image1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Zurehma/SE2-Kiruna_eXplorer" target="_blank" rel="noreferrer"><h2>Kiruna eXplorer</h2></a>
                <p>Web Application for Municipal Relocation of Kiruna (Sweden). The platform is designed to document and manage the entire relocation process of the city. It provides tools for tracking progress by adding geo-located documents, linking existing documents to each other.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LcPes/emergency-backup-rs" target="_blank" rel="noreferrer"><img src={image2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LcPes/emergency-backup-rs" target="_blank" rel="noreferrer"><h2>Emergency Backup RS</h2></a>
                <p>Emergency Backup RS is a macOS backup tool written in Rust. It allows users to configure an external drive, select up to five directories, and trigger backups by drawing a rectangle in a clockwise direction on the screen. Simple, efficient, and interactive.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;