const heroOverViewText = document.getElementById("hero-block__description");

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
