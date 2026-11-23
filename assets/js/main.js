// ===== Edit these =====
const WA_NUMBER = "919999999999"; // country code + number, no + or spaces
const BRAND = "Ecomaura Construction";
// ======================
const wa = (m) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(m)}`;
const pages = [["index.html","Home"],["about.html","About"],["services.html","Services"],["projects.html","Projects"],["contact.html","Contact"]];
const here = location.pathname.split("/").pop() || "index.html";
document.body.insertAdjacentHTML("afterbegin",`<header><div class="wrap nav"><a class="logo" href="index.html"><i></i>${BRAND}</a><nav aria-label="Main"><button class="burger" aria-label="Menu" aria-expanded="false">&#9776;</button><ul>${pages.map(([h,t])=>`<li><a href="${h}" class="${h===here?"on":""}">${t}</a></li>`).join("")}<li><a class="btn wa" href="#" data-wa="Hi ${BRAND}, I'd like a free quote.">WhatsApp us</a></li></ul></nav></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap grid g4"><div><h3>${BRAND}</h3><p>Residential, commercial and industrial construction, delivered on schedule and on budget.</p></div><div><h3>Pages</h3>${pages.map(([h,t])=>`<a href="${h}">${t}</a>`).join("")}</div><div><h3>Services</h3><a href="services.html">New construction</a><a href="services.html">Renovation</a><a href="services.html">Interiors</a><a href="services.html">Project management</a></div><div><h3>Contact</h3><a href="tel:+${WA_NUMBER}">+${WA_NUMBER}</a><a href="mailto:info@ecomaura.com">info@ecomaura.com</a><a href="#" data-wa="Hello ${BRAND}!">Chat on WhatsApp</a><p>Mon–Sat, 9am–7pm</p></div></div><div class="wrap" style="margin-top:2.5rem;font-size:.9rem">&copy; ${new Date().getFullYear()} ${BRAND}. All rights reserved.</div></footer><a class="fab" href="#" data-wa="Hi ${BRAND}, I have a question about a project." aria-label="Chat on WhatsApp"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg><span>Chat on WhatsApp</span></a>`);
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(a.dataset.wa);a.target="_blank";a.rel="noopener"});
const b=document.querySelector(".burger"),u=document.querySelector("nav ul");
b.onclick=()=>{b.setAttribute("aria-expanded",u.classList.toggle("open"))};
const f=document.getElementById("quote-form");
if(f)f.onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
window.open(wa(`Hi ${BRAND}, I'd like a quote.\nName: ${d.name}\nPhone: ${d.phone}\nProject: ${d.type}\nLocation: ${d.city}\nDetails: ${d.msg}`),"_blank")};
document.querySelectorAll(".filters button").forEach(btn=>btn.onclick=()=>{
document.querySelectorAll(".filters button").forEach(x=>x.classList.toggle("on",x===btn));
document.querySelectorAll("[data-cat]").forEach(p=>p.style.display=btn.dataset.f==="all"||p.dataset.cat===btn.dataset.f?"":"none")});
