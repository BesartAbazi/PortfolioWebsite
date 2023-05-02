let linkProjects = document.getElementById('linkProjects');
let linkHome = document.getElementById('linkHome');
let linkNews = document.getElementById('linkNews');
let nav = document.getElementById('nav');
let projects = document.getElementsByClassName('projects')[0];

const activateNavBar = () => {
    projects.className = 'projectsActive';
}

const deaactivateNavBar = () => {
    projects.className = 'projects';
}

linkProjects.onmouseover = activateNavBar;
projects.addEventListener('mouseleave', deaactivateNavBar);
nav.addEventListener('mouseleave', deaactivateNavBar);
linkHome.onmouseover = deaactivateNavBar;
linkNews.onmouseover = deaactivateNavBar;
