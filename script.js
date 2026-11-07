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

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projectCards.forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const projectInfo = {
  kidz: {
    category: "Digital marketing / Brand transformation",
    title: "Kidz Therapy",
    description: "A current-role case study showcasing the digital and marketing improvements I have led for a multidisciplinary child, teenager and family therapy provider. I completed a comprehensive website overhaul, strengthened the brand's visual consistency across social media, improved organic search visibility and developed well-researched blog content to help families better understand the services available.",
    focus: "Website strategy and redesign, user experience, on-page and technical SEO, keyword research, social media visual consistency, content research and blog writing. Website: kidztherapy.co.nz"
  },
  ktl: {
    category: "Digital marketing / Education brand",
    title: "KTL Tuition",
    description: "A current-role case study focused on strengthening the online presence of a tutoring provider supporting students across different learning pathways. My work includes a complete website overhaul, improving search visibility, creating a more cohesive visual presence across social channels and writing researched blog content that supports the brand's educational offering.",
    focus: "Website strategy and redesign, SEO, social media consistency, content research and blog writing. Website: ktltuition.co.nz"
  },
  buddy: {
    category: "Product concept / Digital",
    title: "Buddy — Smart Baby Monitor",
    description: "An independent product concept exploring how connected technology could support parents and simplify everyday baby care. The project includes concept development, market evaluation, app wireframing, prototyping, branding and user-experience thinking.",
    focus: "Product concept, research, app design, UI/UX, prototyping, branding and testing."
  },
  beauty: {
    category: "Brand / Packaging",
    title: "Beauty Ethics",
    description: "A skincare packaging and brand-development concept focused on communicating natural ingredients, care and an elevated product experience.",
    focus: "Product design, brand identity, packaging, prototyping and print."
  },
  dive: {
    category: "Brand identity",
    title: "Dive Doctors",
    description: "A logo and identity project for a New Zealand dive business, bringing together a sense of adventure, professionalism and the marine environment.",
    focus: "Logo design, visual identity and brand application."
  },
  prepress: {
    category: "Print / Production",
    title: "Self-Adhesive Labels",
    description: "Print-production experience preparing artwork for high-quality label manufacture, with close attention to detail, colour, finishing and production requirements.",
    focus: "Prepress, artwork preparation, digital and offset printing, foiling, embossing and high-build finishes."
  },
  cube: {
    category: "Brand collateral",
    title: "Cube Group",
    description: "Logo refinement and supporting collateral for a start-up construction business, extending its identity across practical business materials.",
    focus: "Logo refinement, infographics, stationery and collateral design."
  },
  code: {
    category: "Development",
    title: "Coded Programs",
    description: "A collection of learning and practice projects exploring programming fundamentals, functions, debugging, data validation and development methodology.",
    focus: "JavaScript, Python, C#, flowcharts, functions and debugging."
  },
  signwriting: {
    category: "Creative services",
    title: "Signwriting & Creative Services",
    description: "A broad collection of work across family-owned signwriting businesses in New Zealand, Australia and England, spanning print, digital design and marketing support.",
    focus: "Graphic design, social media, website maintenance, large-format printing and signage."
  },
  hotels: {
    category: "Digital campaign",
    title: "Hotels.com Advertising Campaign",
    description: "Digital advertising and creative campaign work designed to showcase hotel experiences and inspire people to consider their next trip.",
    focus: "Creative curation, online advertising, storytelling and motion graphics."
  }
};

const dialog = document.querySelector(".project-dialog");
const closeDialog = document.querySelector(".dialog-close");

function openProject(card) {
  const project = projectInfo[card.dataset.project];
  if (!project || !dialog) return;
  document.querySelector("#dialog-category").textContent = project.category;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-description").textContent = project.description;
  document.querySelector("#dialog-focus").textContent = project.focus;
  dialog.showModal();
}

projectCards.forEach(card => {
  card.addEventListener("click", () => openProject(card));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(card);
    }
  });
});

closeDialog?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#year").textContent = new Date().getFullYear();
