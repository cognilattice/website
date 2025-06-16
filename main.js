/* particlesJS config */
particlesJS('particles-js',
{particles:{number:{value:60,density:{enable:true,value_area:800}},
color:{value:'#8a2be2'},
shape:{type:'circle'},
opacity:{value:0.4,random:true},
size:{value:3,random:true},
line_linked:{enable:true,distance:120,color:'#00d1ff',opacity:0.3,width:1},
move:{enable:true,speed:2,random:false,straight:false,out_mode:'out'}},
interactivity:{detect_on:'canvas',events:{onhover:{enable:true,mode:'grab'},onclick:{enable:true,mode:'push'}},modes:{grab:{distance:140,line_linked:{opacity:1}},push:{particles_nb:4}}},
retina_detect:true});
/* Init AOS */
AOS.init({once:true,duration:700});
/* Smooth scroll to contact */
document.getElementById('cta').addEventListener('click',e=>{
  e.preventDefault();
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
});
/* IntersectionObserver fade-in for .observe */
const io=new IntersectionObserver(entries=>{
  entries.forEach(ent=>{
    if(ent.isIntersecting){
      ent.target.classList.add('visible');
      io.unobserve(ent.target);
    }
  });
},{threshold:0.2});
document.querySelectorAll('.observe').forEach(el=>io.observe(el));