import { nav, projects, plannedProjects, linkProjects, linkHome, linkPlannedProjects, linkNewPage } from './init.js';

// Links
linkHome.onmouseup = () => {
    linkNewPage('index.html');
};
