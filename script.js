const navbar = document.querySelector(".navbar");
const navList = document.getElementById("navList");
const indicator = document.getElementById("electricIndicator");
const links = [...document.querySelectorAll(".nav-link")];
const previewTitle = document.getElementById("previewTitle");
const previewText = document.getElementById("previewText");

const sectionCopy = {
  home: "Welcome to the electric navigation demo.",
  projects: "Explore selected projects and creative work.",
  services: "Discover the services and solutions on offer.",
  about: "Learn more about the people behind the work.",
  contact: "Get in touch and start a conversation."
};

function moveIndicator(link) {
  const navRect = navbar.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  indicator.style.left = `${linkRect.left - navRect.left + linkRect.width / 2 - indicator.offsetWidth / 2}px`;
  indicator.style.width = `${Math.max(54, linkRect.width + 18)}px`;
  navbar.classList.add("has-active");
}

function activate(link, updateHash = false) {
  links.forEach(item => {
    const selected = item === link;
    item.classList.toggle("active", selected);
    if (selected) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });

  const key = link.dataset.section;
  previewTitle.textContent = key.toUpperCase();
  previewText.textContent = sectionCopy[key] || "";
  moveIndicator(link);

  if (updateHash) {
    history.replaceState(null, "", `#${key}`);
  }
}

links.forEach(link => {
  link.addEventListener("mouseenter", () => moveIndicator(link));
  link.addEventListener("focus", () => moveIndicator(link));
  link.addEventListener("click", event => {
    event.preventDefault();
    activate(link, true);
  });
});

navList.addEventListener("mouseleave", () => {
  const active = links.find(link => link.classList.contains("active"));
  if (active) moveIndicator(active);
});

window.addEventListener("resize", () => {
  const active = links.find(link => link.classList.contains("active"));
  if (active) moveIndicator(active);
});

const initial = links.find(link => link.dataset.section === location.hash.slice(1)) || links[0];
activate(initial);

const cssSnippet = `.navbar {
  background: rgba(18, 20, 29, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem 3rem;
  border-radius: 20px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.5),
    inset 0 0 20px rgba(0, 243, 255, 0.02);
  position: relative;
  z-index: 10;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 3rem;
}`;

document.getElementById("cssPreview").textContent = cssSnippet;
document.getElementById("copyCss").addEventListener("click", async () => {
  const button = document.getElementById("copyCss");
  try {
    await navigator.clipboard.writeText(cssSnippet);
    button.textContent = "Copied!";
  } catch {
    button.textContent = "Copy unavailable";
  }
  window.setTimeout(() => button.textContent = "Copy CSS", 1500);
});
