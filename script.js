const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (button && nav) {
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'CLOSE' : 'MENU';
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'MENU';
    });
  });
}
