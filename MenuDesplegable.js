const OpMenu = document.querySelector(".OptMenu")
const btton =document.querySelector(".btton")
OpMenu.addEventListener("mousedown", () => {
	OpMenu.classList.toggle("Active");
	btton.classList.toggle("Active");
});