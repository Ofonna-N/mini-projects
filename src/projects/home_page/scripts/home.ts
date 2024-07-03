const heroOverViewText = document.getElementById("hero-block__description");

type Project = {
  title: string;
  description: string;
  techStack: string[];
  demoLink: string;
  codeLink?: string;
  thumbnail?: string;
};

const projectsData: Project[] = [
  {
    title: "Quote Generator",
    description:
      "A simple quote generator that fetches random quotes from an API.",
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "quote-generator/index.html",
    thumbnail: "quote-generator/thumbnail.png",
    codeLink: "",
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

const initHome = () => {
  updateHeroOverviewText();
  window.addEventListener("resize", updateHeroOverviewText);
};

export default initHome;
