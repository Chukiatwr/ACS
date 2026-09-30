
function toggleMenu(){document.querySelector('.menu').classList.toggle('open')}
function setActive(){const page=document.body.dataset.page;document.querySelectorAll('.menu a').forEach(a=>{if(a.dataset.page===page)a.classList.add('active')})}
window.addEventListener('DOMContentLoaded',setActive);
