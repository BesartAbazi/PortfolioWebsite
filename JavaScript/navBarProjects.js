const activateProjectsBar = () => {
    projects.style.maxHeight = '500px';
    projects.style.left = linkProjects.offsetLeft + 10 + 'px';
}

const deActivateProjectsBar = () => {
    projects.style.maxHeight = '0px';
}

// active the projects bar
linkProjects.onmouseover = activateProjectsBar;

// deactive the projects bar
nav.onmouseleave = projects.onmouseleave = linkHome.onmouseover = linkPlannedProjects.onmouseover = deActivateProjectsBar;
