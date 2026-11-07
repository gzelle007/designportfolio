const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  menuToggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  nav.classList.toggle("is-open", !open);
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
  });
});

// EDIT PROJECTS HERE: replace image files in /images, and edit links below.
// A blank URL means the icon is hidden. Links open in a new tab.
const projectInfo = {
  buddy: {category:"Product design / UI/UX",title:"Buddy — Smart Baby Monitor",description:"A connected baby-monitor concept exploring product design, research, brand identity and a parent-focused mobile experience.",focus:"Product concept, research, UI/UX, prototyping and branding.",links:{website:"https://gzelle007.github.io/designportfolio/buddy.html"}},
  beauty: {category:"Brand / Packaging",title:"Beauty Ethics",description:"Skincare branding and packaging exploring an elevated, thoughtful product identity.",focus:"Branding, packaging and print production.",links:{}},
  dive: {category:"Brand identity",title:"Dive Doctors",description:"Brand identity work for a diving business, inspired by the ocean and a spirit of adventure.",focus:"Logo design, visual identity and brand applications.",links:{}},
  prepress: {category:"Print / Production",title:"Print & Prepress",description:"High-quality print and label production work including detailed prepress preparation and speciality finishes.",focus:"Prepress, foiling, embossing, labels and print finishing.",links:{}},
  cube: {category:"Brand collateral",title:"Cube Group",description:"Visual identity refinement and practical branded collateral for a construction business.",focus:"Identity, business collateral and infographics.",links:{}},
  code: {category:"Development",title:"Coding Projects",description:"A selection of development exercises and creative coding projects.",focus:"HTML, CSS, JavaScript, Python and C#.",links:{github:"https://github.com/gzelle007"}},
  kidz: {category:"Digital marketing / Growth",title:"Kidz Therapy",description:"A digital transformation spanning website overhaul, clearer user journeys, consistent social content, SEO improvements and research-led articles for a child, teenager and family wellbeing service.",focus:"Website, SEO, blog content, social media and digital marketing.",links:{website:"https://www.kidztherapy.co.nz/",facebook:"https://www.facebook.com/kidztherapynz"}},
  ktl: {category:"Digital marketing / Growth",title:"KTL Tuition",description:"A refreshed digital presence for a personalised tuition brand, bringing together website improvements, search visibility, consistent social visuals and educational content.",focus:"Website, SEO, blog content, social media and digital marketing.",links:{website:"https://www.ktltuition.co.nz/",facebook:"https://www.facebook.com/ktltuition/",instagram:"https://www.instagram.com/ktltuition"}},
  signwriting: {category:"Creative services",title:"Signwriting & Creative Services",description:"Graphic design, signage and marketing work across print and large-format applications.",focus:"Graphic design, signage and large-format production.",links:{}},
  hotels: {category:"Digital campaign",title:"Hotels.com Campaign",description:"Campaign and digital creative work built around travel experiences and compelling storytelling.",focus:"Digital advertising, visual storytelling and motion.",links:{}}
};

// Simple inline SVG icons; no external icon library needed.
const iconSVG = {
  website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.3 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.4H8v3.2h2.9V21z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.46c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>'
};
function makeLinks(links) {
  const wrapper=document.createDocumentFragment();
  for (const [type,url] of Object.entries(links || {})) {
    if (!url || !iconSVG[type]) continue;
    const a=document.createElement('a');
    a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.className='social-icon';
    a.setAttribute('aria-label',`Open ${type} in a new tab`);a.title=type[0].toUpperCase()+type.slice(1);
    a.innerHTML=iconSVG[type];wrapper.appendChild(a);
  }
  return wrapper;
}
for (const card of document.querySelectorAll('.project-card')) {
  const project=projectInfo[card.dataset.project];
  const links=card.querySelector('.project-external');
  if (project && links) links.appendChild(makeLinks(project.links));
}
const filterButtons=document.querySelectorAll('.filter-btn');
const projectCards=document.querySelectorAll('.project-card');
function updateFilter(filter) {
  for (const card of projectCards) card.hidden=filter!=='all' && card.dataset.category!==filter;
  for (const button of filterButtons) {
    const active=button.dataset.filter===filter;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',String(active));
  }
}
for (const button of filterButtons) button.addEventListener('click',()=>updateFilter(button.dataset.filter));
const dialog=document.querySelector('.project-dialog');
function openProject(id) {
  const p=projectInfo[id];if (!p || !dialog) return;
  document.querySelector('#dialog-category').textContent=p.category;
  document.querySelector('#dialog-title').textContent=p.title;
  document.querySelector('#dialog-description').textContent=p.description;
  document.querySelector('#dialog-focus').textContent=p.focus;
  const links=document.querySelector('#dialog-links');links.replaceChildren(makeLinks(p.links));
  if (!dialog.open) dialog.showModal();
}
for (const card of projectCards) card.querySelector('.project-open')?.addEventListener('click',()=>openProject(card.dataset.project));
document.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog) dialog.close()});
document.querySelector('#year').textContent=new Date().getFullYear();
