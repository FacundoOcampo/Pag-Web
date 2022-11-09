const NavB = document.querySelector(".Nav-Button");
const NavM = document.querySelector(".Nav-Menu");

NavB.addEventListener("click", () => {
	NavM.classList.toggle("Nav-Menu_Visible");

	if (NavM.classList.contains("Nav-Menu_Visible")) {
    NavB.setAttribute("aria-label", "Cerrar menú");
  } else {
    NavB.setAttribute("aria-label", "Abrir menú");
  }
});