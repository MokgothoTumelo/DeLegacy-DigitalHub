(() => {
  const destinations = window.DE_LEGACY_DESTINATIONS || {};
  const labels = {
    run: "DE RUN",
    clothing: "Clothing",
    opportunities: "Opportunities",
    partnerships: "Partnerships"
  };

  document.querySelectorAll("[data-destination]").forEach((card) => {
    const key = card.dataset.destination;
    const link = card.querySelector(".card-link");
    const url = typeof destinations[key] === "string" ? destinations[key].trim() : "";

    if (!link) return;

    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      link.removeAttribute("tabindex");
      link.querySelector(".link-label").textContent = `Explore ${labels[key] || key}`;
      card.classList.add("is-live");
    } else {
      link.href = "#destinations";
      link.setAttribute("aria-disabled", "true");
      link.tabIndex = -1;
      link.querySelector(".link-label").textContent = "Coming soon";
      card.classList.add("is-pending");
    }
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
