const menu=document.querySelector('.menu'),links=document.querySelector('.links');
menu?.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  menu.setAttribute('aria-expanded',open?'true':'false');
});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{
  links.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
}));
const obs=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('visible');
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
