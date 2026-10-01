function toggleMenu(){document.querySelector('.menu').classList.toggle('open')}
function setActive(){const page=document.body.dataset.page;document.querySelectorAll('.menu a[data-page],.contact-nav-btn[data-page]').forEach(a=>{if(a.dataset.page===page)a.classList.add('active')});document.querySelectorAll('.menu-item[data-pages]').forEach(g=>{const pages=(g.dataset.pages||'').split(/\s+/);if(pages.includes(page))g.classList.add('group-active')})}
window.addEventListener('DOMContentLoaded',setActive);


function scrollNews(direction){
  const track=document.getElementById('newsTrack');
  if(!track)return;
  const card=track.querySelector('.news-card');
  const step=card ? card.getBoundingClientRect().width + 18 : 360;
  track.scrollBy({left:direction==='left'?-step:step,behavior:'smooth'});
}
