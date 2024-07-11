import ROUTES from "../../../constants/routes";
import thumbnails from "./thumbnails";

const heroOverViewText = document.getElementById("hero-block__description");
const projectsContainer = document.getElementById("projects-block__grid");

type Project = {
  title: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  codeLink?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
};

const projectsData: Project[] = [
  {
    title: "Quote Generator",
    description:
      "A simple quote generator that fetches random quotes from an API.",
    techStack: ["HTML", "CSS", "JavaScript"],
    thumbnail: thumbnails.quoteGenerator,
    thumbnailAlt: "Quote Generator",
    codeLink:
      "https://github.com/Ofonna-N/mini-projects/tree/main/src/projects/quote_generator",
    demoLink: `${ROUTES.BASE}/src/projects/quote_generator/index.html`,
  },
];

const updateHeroOverviewText = () => {
  const width = window.innerWidth;

  if (!heroOverViewText) return;

  if (width < 600) {
    heroOverViewText.innerText =
      "Each mini-project represents a focused exercise, " +
      "allowing me to sharpen my skills, experiment with new techniques, " +
      "and express creativity.";
  } else {
    heroOverViewText.innerText =
      "As a frontend engineer, I believe in continuous learning and " +
      "hands-on practice. This repository serves as my daily playground—a " +
      "space where I explore HTML, CSS, and JavaScript through bite-sized " +
      "projects. Each mini-project represents a focused exercise, " +
      "allowing me to sharpen my skills, experiment with new techniques, " +
      "and express creativity.";
  }
};

const getProjectCard = (project: Project) => {
  return `<div class="project-card">
                <a href='${project.demoLink}'>
                  <img
                    src=${project.thumbnail}
                    alt=${project.thumbnailAlt}
                    class="project-card__image"
                  />
                  <div class="project-card__content">
                             <div class="project-card__title-container">
                      <h3 class="project-card__title">${project.title}</h3>
                      <i
                        class="fa-brands fa-github"
                        onclick='window.open("${project.codeLink}", "_blank")'
                      ></i>
                    </div>
                    <p class="project-card__desc">
                      ${project.description}
                    </p>
                    <div class="project-card__tech-stack">
                      ${project.techStack
                        .map(
                          (stack) =>
                            `<span class="project-card__tag">${stack}</span>`
                        )
                        .join(" ")}
                    </div>
                  </div>
                </a>
              </div>`;
};

const populateProjects = () => {
  projectsContainer!.innerHTML = projectsData
    .map((project) => getProjectCard(project))
    .join("");
};

const initHome = () => {
  updateHeroOverviewText();
  populateProjects();
  window.addEventListener("resize", updateHeroOverviewText);
};

export default initHome;
