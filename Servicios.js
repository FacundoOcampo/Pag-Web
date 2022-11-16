const NavS = document.querySelector(".Nav-Button");
const NavA = document.querySelector(".Nav-Menu");

const Bloq = document.querySelectorAll(".Bloque")
const btt = document.querySelectorAll(".BttonAct")

NavS.addEventListener("click", () => {
	NavA.classList.toggle("Nav-Menu_Visible");

	if (NavA.classList.contains("Nav-Menu_Visible")) {
    NavS.setAttribute("aria-label", "Cerrar menú");
  } else {
    NavS.setAttribute("aria-label", "Abrir menú");
  }
});

btt.forEach((cadaBt,i)=>{
	btt[i].addEventListener("click",()=>{
		btt.forEach((cadaBt,i)=>{
			Bloq[i].classList.remove("Activo")
		})
		Bloq[i].classList.add("Activo")
	})
})