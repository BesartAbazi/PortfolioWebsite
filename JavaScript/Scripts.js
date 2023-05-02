let linkProjects = document.getElementById('linkProjects');
let projects = document.getElementsByClassName('projects')[0];

const activateNavBar = () => {
    if (projects.style.display == '')
        projects.className = 'projectsActive';
}

const deaactivateNavBar = (event) => {
    event.target.className = 'projects';
}

linkProjects.onmouseover = activateNavBar;
projects.addEventListener('mouseleave', deaactivateNavBar);
