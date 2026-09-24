
const root=document.documentElement;
const btn=document.getElementById('theme');
const saved=localStorage.getItem('portfolio-theme');
if(saved) root.dataset.theme=saved;
btn.addEventListener('click',()=>{const n=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=n;localStorage.setItem('portfolio-theme',n)});
const dot=document.querySelector('.cursor-dot');
window.addEventListener('pointermove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'steps(8,end)',fill:'both'})}),{threshold:.08});
document.querySelectorAll('.feature,.project-tile,.lab-note,.timeline article').forEach(x=>obs.observe(x));
