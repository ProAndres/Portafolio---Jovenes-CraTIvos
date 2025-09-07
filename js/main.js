//Botones del Header
const openHeader = document.querySelector("#openHeader");
const navInvisible = document.querySelector("#navInvisible");
const closeHeader = document.querySelector("#closeHeader");


openHeader.addEventListener("click", () => {
    navInvisible.classList.add("navVisible");
});

closeHeader.addEventListener("click", () =>{
    navInvisible.classList.remove("navVisible");
});

//Botones de las habilidades
const openWeb = document.querySelector("#openWeb");
const openGame = document.querySelector("#openGame");
const openProgram = document.querySelector("#openProgram");
const showWeb = document.querySelector("#showWeb");
const showGame = document.querySelector("#showGame");
const showProgram = document.querySelector("#showProgram");
const openWebBtn = document.querySelector("#openWebBtn");
const openGameBtn = document.querySelector("#openGameBtn");
const openProgramBtn = document.querySelector("#openProgramBtn");

//Open Web
openWeb.addEventListener("click", () =>{
    showWeb.classList.toggle("codeSkillShow");
    openWebBtn.classList.toggle("bi-caret-up-fill")
});

//Open Game
openGame.addEventListener("click", () =>{
    showGame.classList.toggle("codeSkillShow");
    openGameBtn.classList.toggle("bi-caret-up-fill")
});

//Open Program
openProgram.addEventListener("click", () =>{
    showProgram.classList.toggle("codeSkillShow");
    openProgramBtn.classList.toggle("bi-caret-up-fill")
});

//FORMULARIO VALIDACIÓN
const forms = document.querySelector("#forms")
const buttonMailto = document.querySelector("#mailto")

forms.addEventListener("submit", handleSubmit )

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get("names"))
    console.log(form.get("email"))
    console.log(form.get("number"))
    console.log(form.get("message"))
    document.querySelector("form").reset();
}
