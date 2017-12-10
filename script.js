const headerDiv = document.getElementById('header-div');
const headerDivOverlay = document.querySelector('.overlay');
const fixedBottom = document.querySelector('.fixed-bottom');
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.toggle');
const sidebarLi = document.querySelectorAll('.sidebar li');
const about = document.querySelector('.about');
const HalfRight= document.querySelector(".half-right");
const projectLi = document.querySelectorAll('.projects-slides li')
const project1 = document.querySelector('.portfolio-projects .wrap-project:nth-child(1)')
const project2 = document.querySelector('.portfolio-projects .wrap-project:nth-child(2)')
const project3 = document.querySelector('.portfolio-projects .wrap-project:nth-child(3)')
const project4 = document.querySelector('.portfolio-projects .wrap-project:nth-child(4)')
const project5 = document.querySelector('.portfolio-projects .wrap-project:nth-child(5)')
const btnFrom = document.querySelector('.btn');
const contactForm = document.querySelector('.form'); 
const contentForm = document.querySelectorAll('.p-form');
const me = document.querySelector('.me');
const contact = document.querySelector('.contact');
const portfolio = document.querySelector('.portfolio-titles');
const pageWrap = document.querySelector('.page-wrap');
const socials = document.querySelectorAll('.socials li');
const meEnd = document.querySelector('.me-end');
function scrollSmooth (e)  { 
    var amountMovedX = (e.pageX * 1 / 15);
    var amountMovedY = (e.pageY * 1 / 15);

    headerDiv.style.backgroundPosition = amountMovedX  + 'px ' + amountMovedY + 'px';  
};

function showSidebar (e){
    sidebar.classList.toggle('show-sidebar');
   
}

function showProject (e){
  if (this===projectLi[0]){
    project1.classList.toggle('show-project'); 
    project2.classList.remove("show-project");
    project3.classList.remove("show-project");
    project4.classList.remove("show-project");
    project5.classList.remove('show-project');        
  }
   if (this===projectLi[1]){
    project2.classList.toggle('show-project');
    project1.classList.remove("show-project");
    project3.classList.remove("show-project");
    project4.classList.remove("show-project");
    project5.classList.remove('show-project');
  }
  if (this===projectLi[2]){  
    project3.classList.toggle('show-project');
    project2.classList.remove("show-project");
    project1.classList.remove("show-project");
    project4.classList.remove("show-project");
    project5.classList.remove('show-project');
  }
  if (this===projectLi[3]){
    project1.classList.remove("show-project");
    project2.classList.remove("show-project");
    project3.classList.remove("show-project");
    project4.classList.toggle('show-project');
    project5.classList.remove('show-project');
      
   }   
  if (this===projectLi[4]){
    project1.classList.remove("show-project");
    project2.classList.remove("show-project");
    project3.classList.remove("show-project");
    project5.classList.toggle('show-project');
    project4.classList.remove('show-project');
   }   
}

function showForm (e){
   contactForm.classList.toggle('show-form'); 
   for (var i = contentForm.length - 1; i >= 0; i--) {
     contentForm[i].classList.toggle('show-content');
   }
//contentForm.forEach(p => p.toggle('show-content'));
}

headerDiv.addEventListener('mousemove', scrollSmooth);
toggle.addEventListener("click",showSidebar);
projectLi.forEach(li => li.addEventListener('click', showProject));
btnFrom.addEventListener('click',showForm);


sidebarLi[0].addEventListener('click', () => {
  pageWrap.scrollIntoView({block:'start' });
});
sidebarLi[1].addEventListener('click', () => {
  about.scrollIntoView({block:'start'});
});
sidebarLi[2].addEventListener('click', () => {
  portfolio.scrollIntoView({block:'end'});
});

sidebarLi[3].addEventListener('click', () => {
  contact.scrollIntoView({block:'end'});
});


window.addEventListener('scroll', scrollWhere);
window.addEventListener('onkeydown',scrollTo);

 
function scrollWhere (e) {
      var aboutHeight = about.offsetHeight;
      var windowScroll = window.pageYOffset ;
	    var heightHalfRight = HalfRight.offsetHeight;


if(windowScroll < heightHalfRight+2){

  headerDivOverlay.style.display='block';
}
if (windowScroll > heightHalfRight  & windowScroll < aboutHeight) 
{
  console.log("sunt un penis cu urechi");
  headerDivOverlay.style.display='none';
  me.classList = 'me-fixed';
 } 

else {
  
me.classList.remove("me-fixed");



}
}


var load;
function waitToLoad() {
    load = setTimeout(showContet, .5);
}

function showContet() {
  document.querySelector(".over").style.display = "none";
  document.querySelector("body").style.display = "block";
}

 
// MEDIA QUERI
const mq = window.matchMedia( "(max-width: 1200px)" );
if (mq.matches) {}

// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });