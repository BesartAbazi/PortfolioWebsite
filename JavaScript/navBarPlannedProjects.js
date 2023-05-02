const activatePlannedProjectsBar = () => {
    plannedProjects.style.maxHeight = '500px';
    plannedProjects.style.left = linkPlannedProjects.offsetLeft + 10 + 'px';
}

const deActivatePlannedProjectsBar = () => {
    plannedProjects.style.maxHeight = '0px';
}

// active the plannedProjects bar
linkPlannedProjects.onmouseover = activatePlannedProjectsBar;

// deactive the plannedProjects bar
nav.onmouseleave = plannedProjects.onmouseleave = linkHome.onmouseover = linkProjects.onmouseover = deActivatePlannedProjectsBar;
