import { nav, projects, plannedProjects, linkProjects, linkHome, linkPlannedProjects, linkNewPage } from './init.js';

const activateProjectsBar = () => {
    projects.style.maxHeight = '500px';
    projects.style.left = linkProjects.offsetLeft + 10 + 'px';
}

const deActivateProjectsBar = () => {
    projects.style.maxHeight = '0px';
}

// active the projects bar
linkProjects.addEventListener('mouseover', activateProjectsBar);

// deactive the projects bar
nav.addEventListener('mouseleave', deActivateProjectsBar);
projects.addEventListener('mouseleave', deActivateProjectsBar);
linkHome.addEventListener('mouseover', deActivateProjectsBar);
linkPlannedProjects.addEventListener('mouseover', deActivateProjectsBar);

// Links
linkProjects.onmouseup = () => {
    linkNewPage('projects.html');
};       