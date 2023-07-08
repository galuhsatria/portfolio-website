const menu = document.getElementById("menu");
const menuLink = document.querySelectorAll(".menu-link");
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  menu.style.right = "0%";
});

close.addEventListener("click", () => {
  menu.style.right = "-100%";
});
menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.right = "-100%";
  });
});

const listProject = [
  {
    thumbniel: "/asset/community-landing-page.png",
    label: "Community Landing Page",
    repository: "https://github.com/galuhsatria/community-landing-page",
    live: "https://community-landing-page-galuhsatria.vercel.app/",
    tech: ["/asset/Tailwind_CSS_Logo.svg.png", "/asset/reactjs.png"],
  },
  {
    thumbniel: "/asset/wa-helper.png",
    label: "WhatsApp Messsage Helper",
    repository: "https://github.com/galuhsatria/whatsapp-messages-helper",
    live: "https://whatsapp-messages-helper.vercel.app/",
    tech: ["/asset/Tailwind_CSS_Logo.svg.png", "/asset/reactjs.png"],
  },
  {
    thumbniel: "/asset/alquran-app.png",
    label: "Al-Quran App",
    repository: "https://github.com/galuhsatria/quran-app",
    live: "https://galuhsatria-quran-app.vercel.app/",
    tech: ["/asset/Tailwind_CSS_Logo.svg.png", "/asset/reactjs.png"],
  },
  {
    thumbniel: "/asset/blog-page.png",
    label: "Blog Page",
    repository: "https://github.com/galuhsatria/blog-page",
    live: "https://blog-page-galuhsatria.vercel.app/",
    tech: ["/asset/Tailwind_CSS_Logo.svg.png", "/asset/nextjs.png"],
  },
];

const project = document.getElementById("listProject");

listProject.map(
  (data) =>
    (project.innerHTML += `
  <div class="bg-secondary p-4  rounded-md flex flex-col gap-5" data-aos="fade-up" data-aos-duration="1500">
  <div class="thumniel w-60 h-48">
    <img src="${data.thumbniel}" alt="" class="object-cover h-48 w-60 rounded-md" />
  </div>
  <p class="text-center text-primary">${data.label}</p>
  <div class="tech-stack flex gap-5 w-10" id="tech-stack">
    ${data.tech.map((tech) => `<img src="${tech}" alt="" class="object-contain" />`).join("")}
  </div>
  <div class="flex gap-5">
    <a href="${data.repository}" class="hover:text-primary">Repository <i class="bi bi-github"></i></a>
    <a href="${data.live}" class="hover:text-primary">Live Demo <i class="bi bi-box-arrow-in-up-right"></i></a>
  </div>
</div>
  `)
);
