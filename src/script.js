document.addEventListener("DOMContentLoaded", () => {
    const togglePasswordButton = document.querySelector(".toggle-password");
    const passwordInput = document.getElementById("password");

    togglePasswordButton.addEventListener("click", () => {
        const isPasswordVisible = passwordInput.type === "text";
        passwordInput.type = isPasswordVisible ? "password" : "text";

        const img = togglePasswordButton.querySelector("img");
        img.src = isPasswordVisible ? "public/hide.png" : "public/show.png";
    });
});
