const menuOpenButton = document.querySelector(".header-menu-open-button");
const menuCloseButton = document.querySelector(".navbar-menu-close-button");
const navbarMenu = document.querySelector(".header-navbar");
const destNavbarButtons = document.querySelectorAll(".dest-navbar-button");
const crewIndicators = document.querySelectorAll(".crew-indicator");
const techIndicators = document.querySelectorAll(".tech-indicator");

let jsonData = null;

const toggleNavbarMenu = () => {
  navbarMenu.classList.toggle("active");
  document.body.classList.toggle("scroll-lock");
};

const fetchData = async () => {
  try {
    const response = await fetch("./data.json");

    if (!response.ok) throw new Error("Failed to load data.");

    jsonData = await response.json();

    console.log(jsonData);
  } catch (error) {
    console.error("Error:", error);
  }
};
fetchData();

/* 1. Navbar Listeners */
menuOpenButton.addEventListener("click", toggleNavbarMenu);
menuCloseButton.addEventListener("click", toggleNavbarMenu);
document.addEventListener("click", (e) => {
  if (navbarMenu.classList.contains("active")) {
    if (!navbarMenu.contains(e.target) && !menuOpenButton.contains(e.target)) {
      toggleNavbarMenu();
    }
  }
});

/* 2. Destination Page Elements */
if (destNavbarButtons.length > 0) {
  const destImage = document.querySelector(".dest-img");
  const destName = document.querySelector(".dest-content-title");
  const destDescription = document.querySelector(".dest-content-text");
  const destDistance = document.querySelector(".dest-stat-distance");
  const destTravel = document.querySelector(".dest-stat-travel");

  const updateDestinationContent = (planetName) => {
    if (!jsonData) return;

    const data = jsonData.destinations.find((item) => item.name === planetName);

    if (data) {
      destImage.src = data.images.webp;
      destImage.alt = data.name;
      destName.textContent = data.name;
      destDescription.textContent = data.description;
      destDistance.textContent = data.distance;
      destTravel.textContent = data.travel;
    }
  };

  destNavbarButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      destNavbarButtons.forEach((btn) => btn.classList.remove("active"));

      const clickedButton = e.currentTarget;
      clickedButton.classList.add("active");

      const planetName = clickedButton.dataset.name;
      updateDestinationContent(planetName);
    });
  });
}

/* 3. Crew Page Elements */
if (crewIndicators.length > 0) {
  const crewImage = document.querySelector(".crew-img");
  const crewRole = document.querySelector(".crew-content-pre-title");
  const crewName = document.querySelector(".crew-content-title");
  const crewBio = document.querySelector(".crew-content-text");

  const updateCrewContent = (memberName) => {
    if (!jsonData) return;

    const data = jsonData.crew.find((item) => item.name === memberName);

    if (data) {
      crewImage.src = data.images.webp;
      crewImage.alt = data.name;
      crewRole.textContent = data.role;
      crewName.textContent = data.name;
      crewBio.textContent = data.bio;
    }
  };

  crewIndicators.forEach((button) => {
    button.addEventListener("click", (e) => {
      crewIndicators.forEach((btn) => btn.classList.remove("active"));

      const clickedButton = e.currentTarget;
      clickedButton.classList.add("active");

      const memberName = clickedButton.dataset.name;
      updateCrewContent(memberName);
    });
  });
}

/* 4. Technology Page Elements */
if (techIndicators.length > 0) {
  const techImage = document.querySelector(".tech-img");
  const techImageSource = document.querySelector(".tech-img-source");
  const techName = document.querySelector(".tech-content-title");
  const techDescription = document.querySelector(".tech-content-text");

  const updateTechnologyContent = (gearName) => {
    if (!jsonData) return;

    const data = jsonData.technology.find((item) => item.name === gearName);

    if (data) {
      techImage.src = data.images.portrait;
      techImage.alt = data.name;

      if (techImageSource) {
        techImageSource.srcset = data.images.landscape;
      }

      techName.textContent = data.name;
      techDescription.textContent = data.description;
    }
  };

  techIndicators.forEach((button) => {
    button.addEventListener("click", (e) => {
      techIndicators.forEach((btn) => btn.classList.remove("active"));

      const clickedButton = e.currentTarget;
      clickedButton.classList.add("active");

      const gearName = clickedButton.dataset.name;
      updateTechnologyContent(gearName);
    });
  });
}
