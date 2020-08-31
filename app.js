const input = document.querySelector(".email-section input");
document
  .querySelector(".email-section button")
  .addEventListener("click", checkEmail);
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
function checkEmail() {
  if (
    input.value == "" &&
    input.style.cssText != "border: 1px solid rgb(255, 82, 99);"
  ) {
    input.insertAdjacentHTML(
      "afterend",
      `
    <p class="alert">Please provide a valid email address</p>
    `
    );
    input.style.border = "1px solid hsl(354, 100%, 66%)";
    input.removeAttribute("placeholder");
    input.setAttribute("placeholder", "example@email/com");
    input.classList.add("editPlaceholder");
  } else if (
    !emailRegex.test(input.value) &&
    input.style.cssText != "border: 1px solid rgb(255, 82, 99);"
  ) {
    input.insertAdjacentHTML(
      "afterend",
      `
    <p class="alert">Please provide a valid email address</p>
    `
    );
    input.style.border = "1px solid hsl(354, 100%, 66%)";
  }
}
input.addEventListener("input", clear);
function clear() {
    input.style.border = "1px solid hsl(223, 100%, 88%)";
    document.querySelector(".alert").remove();
    input.removeAttribute("placeholder");
    input.setAttribute("placeholder", "Your email address...");
    input.classList.remove("editPlaceholder");
}
