(function(){
var s=[].slice.call(document.querySelectorAll('.slide')),d=document.querySelector('.dots'),i=0,t,paused=false,hero=document.querySelector('.slider'),bar=document.querySelector('.bar'),x0=null;
s.forEach(function(_,n){var b=document.createElement('button');b.setAttribute('aria-label','Photo '+(n+1));b.onclick=function(){go(n)};d.appendChild(b)});
function go(n){i=(n+s.length)%s.length;s.forEach(function(x,k){x.classList.toggle('on',k===i)});[].forEach.call(d.children,function(x,k){x.classList.toggle('on',k===i)});play()}
function play(){clearTimeout(t);bar.classList.remove('run');void bar.offsetWidth;if(paused)return;bar.classList.add('run');t=setTimeout(function(){go(i+1)},5000)}
document.querySelector('.prev').onclick=function(){go(i-1)};document.querySelector('.next').onclick=function(){go(i+1)};
hero.addEventListener('pointerdown',function(e){if(e.target.closest('a,.arrow,.dots'))return;x0=e.clientX;paused=true;play()});
hero.addEventListener('pointerup',function(e){if(x0!==null){var dx=e.clientX-x0;if(Math.abs(dx)>40)go(dx<0?i+1:i-1)}x0=null;paused=false;play()});
hero.addEventListener('pointercancel',function(){x0=null;paused=false;play()});
hero.addEventListener('mouseenter',function(){paused=true;play()});hero.addEventListener('mouseleave',function(){paused=false;play()});
hero.setAttribute('tabindex','0');
hero.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')go(i-1);if(e.key==='ArrowRight')go(i+1)});
document.addEventListener('visibilitychange',function(){paused=document.hidden;play()});
go(0);
var ci=document.getElementById('ci'),co=document.getElementById('co');ci.min=co.min=new Date().toISOString().slice(0,10);
document.getElementById('f').onsubmit=function(e){e.preventDefault();
var m='Hello, I would like to book '+document.getElementById('rm').value+' AC room(s) for '+document.getElementById('gs').value+' guest(s). Check-in: '+ci.value+', check-out: '+co.value+'.';
window.open('https://wa.me/918341932709?text='+encodeURIComponent(m),'_blank')};
})();
