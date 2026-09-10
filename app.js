const pages={
  home:{src:"assets/home.webp",alt:"The Home Discovery Show home landing page"},
  fourways:{src:"assets/fourways.webp",alt:"Four Ways In page"},
  episodes:{src:"assets/episodes.webp",alt:"Episodes page"},
  discover:{src:"assets/discover.webp",alt:"Discover page"},
  guest:{src:"assets/guest.webp",alt:"Be My Guest page"},
  about:{src:"assets/about.webp",alt:"About page"},
  swag:{src:"assets/swag.webp",alt:"Swag page"},
  contact:{src:"assets/contact.webp",alt:"Contact page"}
};
const art=document.getElementById("page-art");
const missing=document.getElementById("missing");
const nav=document.getElementById("mainnav");
const menu=document.querySelector(".menu-toggle");
function render(){
  let key=(location.hash||"#home").slice(1);
  if(!pages[key]) key="home";
  const page=pages[key];
  art.hidden=false; missing.hidden=true;
  art.alt=page.alt; art.src=page.src;
  art.onerror=()=>{art.hidden=true;missing.hidden=false};
  document.querySelectorAll("[data-page]").forEach(a=>a.classList.toggle("active",a.dataset.page===key));
  nav.classList.remove("open"); menu.setAttribute("aria-expanded","false");
  window.scrollTo(0,0);
}
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});
document.addEventListener("click",e=>{if(!e.target.closest(".sitebar")){nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}});
window.addEventListener("hashchange",render);
render();
