console.log("Connected!");

const nameInput = document.querySelector("#nameInput");
const welcomeMessage = document.querySelector("#welcomeMessage");

nameInput.addEventListener("input", () => {
  welcomeMessage.textContent = nameInput.value
    ? `Welcome, ${nameInput.value}!`
    : "Welcome!";
});

const studentForm = document.querySelector("#studentForm");
const courseInput = document.querySelector("#courseInput");
const registrationOutput = document.querySelector("#registrationOutput");

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const course = courseInput.value;

  registrationOutput.textContent = `${name} has been registered for ${course}!`;
});

const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
   
    nameInput.value = "";
    courseInput.value = "";

   
    welcomeMessage.textContent = "Welcome!";
    registrationOutput.textContent = "";

   
    document.body.classList.remove("dark");
  }
});
