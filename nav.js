const NAV_HTML = `
<nav>
  <a class="nav-logo" href="index.html">[ Portfolio ]</a>
  <ul class="nav-links">
    <li><a href="index.html">Présentation</a></li>
    <li><a href="parcours.html">Parcours</a></li>
    <li><a href="projets.html">Projets</a></li>
    <li><a href="missions.html">Missions</a></li>
    <li><a href="veilles.html">Veilles</a></li>
    <li><a href="competences.html">Compétences</a></li>
  </ul>
</nav>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});
