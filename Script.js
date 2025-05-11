// Our Java Script code and any backend will be here
window.addEventListener('scroll', () => {
    const headerName = document.querySelector('.name');
    if (window.scrollY > 50) { // Change styles after 50px scroll
        headerName.classList.add('name-scroll');
    } else {
        headerName.classList.remove('name-scroll');
    }
});

document.addEventListener("DOMContentLoaded", () => {
 const signInButton = document.querySelector(".submit button");

    signInButton.addEventListener("click", () => {
        username = document.getElementById("username").value.trim();
        password = document.getElementById("password").value.trim();
        const succec = document.querySelector(".successful");
        const Invalid = document.querySelector(".Invalid");
        if (username === "doctor" && password === "2028") {
            Invalid.classList.remove("Invalid-msg");
            succec.classList.add("successful-msg");
            // alert("Sign in successful!");
            // You can redirect the user if needed:
            // window.location.href = "dashboard.html";
        } else {
            succec.classList.remove("successful-msg");
            Invalid.classList.add("Invalid-msg");
            // alert("Invalid username or password.");
        }
    });
});