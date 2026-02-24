const username = 'EXPOSAND'; 
const container = document.querySelector('.proyectos-grid');

async function getRepos() {
    const response = await fetch(`https://api.github.com/users/EXPOSAND/repos?sort=created&per_page=6`);
    const repos = await response.json();

    repos.forEach(repo => {
        console.log(`Proyecto: ${repo.name} - Link: ${repo.html_url}`);
    });
}
getRepos();