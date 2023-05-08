import { nav, projects, plannedProjects, linkProjects, linkHome, linkPlannedProjects, linkNewPage } from './init.js';

const activatePlannedProjectsBar = () => {
    plannedProjects.style.maxHeight = '500px';
    plannedProjects.style.left = linkPlannedProjects.offsetLeft + 10 + 'px';
}

const deActivatePlannedProjectsBar = () => {
    plannedProjects.style.maxHeight = '0px';
}

// active the plannedProjects bar
linkPlannedProjects.addEventListener('mouseover', activatePlannedProjectsBar);
// deactive the plannedProjects bar
nav.addEventListener('mouseleave', deActivatePlannedProjectsBar);
plannedProjects.addEventListener('mouseleave', deActivatePlannedProjectsBar);
linkHome.addEventListener('mouseover', deActivatePlannedProjectsBar);
linkProjects.addEventListener('mouseover', deActivatePlannedProjectsBar);

// Links
linkPlannedProjects.onmouseup = () => {
    linkNewPage('plannedProjects.html');
};