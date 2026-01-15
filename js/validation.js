const form = document.getElementById("contactForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "All fields are required.";
        errorMessage.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.color = "red";
        return;
    }

    errorMessage.textContent = "Form submitted successfully!";
    errorMessage.style.color = "lightgreen";

    form.reset();
});
