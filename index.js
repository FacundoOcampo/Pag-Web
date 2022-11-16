const NavB = document.querySelector(".Nav-Button");
const NavM = document.querySelector(".Nav-Menu");

const li = document.querySelectorAll(".li")
const Bloque = document.querySelectorAll(".Bloque")
const Btton = document.querySelectorAll(".Boton_Serv")

NavB.addEventListener("click", () => {
	NavM.classList.toggle("Nav-Menu_Visible");

	if (NavM.classList.contains("Nav-Menu_Visible")) {
    NavB.setAttribute("aria-label", "Cerrar menú");
  } else {
    NavB.setAttribute("aria-label", "Abrir menú");
  }
});



li.forEach((cadaLi,i)=>{
  li[i].addEventListener("click",()=>{
    li.forEach((cadaLi,i)=>{
      li[i].classList.remove("Activo")
      Bloque[i].classList.remove("Activo")
      Btton[i].classList.remove("Activo")
    })

    li[i].classList.add("Activo")
    Bloque[i].classList.add("Activo")
    Btton[i].classList.add("Activo")
  })
})