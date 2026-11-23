// ===== Edit these =====
const WA_NUMBER = "919999999999"; // country code + number, no + or spaces
const BRAND = "Ecomaura Construction";
// ======================
const wa = m => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(m)}`;
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(a.dataset.wa);a.target="_blank";a.rel="noopener"});
document.querySelectorAll("[data-tel]").forEach(a=>{a.href="tel:+"+WA_NUMBER;a.textContent="+"+WA_NUMBER});
const b=document.querySelector(".burger"),u=document.querySelector("nav ul"),h=document.querySelector("header");
b.onclick=()=>b.setAttribute("aria-expanded",u.classList.toggle("open"));
u.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>u.classList.remove("open")));
const sc=()=>h.classList.toggle("s",scrollY>60);sc();addEventListener("scroll",sc,{passive:true});
document.getElementById("quote-form").onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));
window.open(wa(`Hi ${BRAND}, I'd like a quote.\nName: ${d.name}\nPhone: ${d.phone}\nProject: ${d.type}\nLocation: ${d.city}\nDetails: ${d.msg}`),"_blank")};
