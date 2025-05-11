// Scroll effect on header
window.addEventListener('scroll', () => {
    const headerName = document.querySelector('.name');
    if (window.scrollY > 50) {
        headerName.classList.add('name-scroll');
    } else {
        headerName.classList.remove('name-scroll');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // 🔐 Sign In Logic
    const signInButton = document.querySelector(".submit button");

    if (signInButton) {
        signInButton.addEventListener("click", () => {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const msg = document.querySelector(".msg");
            if (username === "doctor" && password === "2028") {
                msg.textContent = "✅ Login successful!";
                msg.style.color = "green";

                // Optional redirect after login
                setTimeout(() => {
                window.location.href = "../../html/appointments/appointment.html"; // Adjust path as needed
                }, 1000);
            } else {
                msg.textContent = "❌ Invalid username or password.";
                msg.style.color = "red";
            }
        });
    }

    // 📅 Appointment Booking Logic
    const form = document.getElementById("appointment-form");
    const message = document.getElementById("booking-message");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const type = document.getElementById("appointment-type").value;
            const date = document.getElementById("appointment-date").value;
            const time = document.getElementById("appointment-time").value;

            if (date && time) {
                message.textContent = `✅ Your ${type} has been booked on ${date} at ${time}.`;
                message.style.color = "green";
            } else {
                message.textContent = "❌ Please fill in all fields.";
                message.style.color = "red";
            }
        });
    }

    // 🚪 Sign Out Logic
    const signOutButton = document.getElementById("signout-button");
    const signOutMessage = document.getElementById("signout-message");

    if (signOutButton) {
        signOutButton.addEventListener("click", () => {
            if (signOutMessage) {
                signOutMessage.textContent = "✅ You have been signed out.";
                signOutMessage.style.color = "green";
            }

            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = "../signin/SingIn.html"; // Adjust path as needed
            }, 1000);
        });
    }
});
