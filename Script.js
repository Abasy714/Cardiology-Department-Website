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
    // Sign In Logic
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
                window.location.href = "../../html/appointments/appointment.html";
                }, 1000);
            } else {
                msg.textContent = "❌ Invalid username or password.";
                msg.style.color = "red";
            }
        });
    }

    // Appointment Booking Logic
    const form = document.getElementById("appointment-form");
    const message = document.getElementById("booking-message");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("appointment-name").value.trim();
            const date = document.getElementById("appointment-date").value;
            const time = document.getElementById("appointment-time").value;
            const type = document.getElementById("appointment-type").value;
            const allowedTypes = [
                "Echocardiography",
                "Electrocardiogram",
                "Holter Monitoring",
                "Stress Testing",
                "Cardiac Catheterization & Angiography",
                "Pacemaker Implantation & Monitoring",
                "Blood Pressure Monitoring",
                "Consultation with Cardiologists",
                "Cardiac Surgery"
            ];

            if (date && time) {
                message.textContent = `✅ Your ${type} has been booked on ${date} at ${time}.`;
                message.style.color = "green";

                const appointment = {
                patient: name,
                type: type,
                date: date,
                time: time,
                checked: false 
                };
                let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
                appointments.push(appointment);
                localStorage.setItem("appointments", JSON.stringify(appointments));

            } else {
                message.textContent = "❌ Please fill in all fields.";
                message.style.color = "red";
            }
        });
    }

    // Sign Out Logic
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
                window.location.href = "../../index.html";
            }, 1000);
        });
    }

    // Appointments Table Logic

    const patientsTable = document.querySelector(".patients");

    if (patientsTable) {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // Sort by date and time
    appointments.sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));

    appointments.forEach((app, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${app.patient}</td>
        <td>${app.type}</td>
        <td>${app.date}</td>
        <td>${app.time}</td>
        <td><input type="checkbox" ${app.checked ? "checked" : ""} data-index="${index}"></td>
        `;

        patientsTable.appendChild(row);
    });

    patientsTable.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") {
        const index = e.target.getAttribute("data-index");
        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        if (e.target.checked) {

            appointments.splice(index, 1);
            localStorage.setItem("appointments", JSON.stringify(appointments));


            location.reload();
        } else {

            appointments[index].checked = e.target.checked;
            localStorage.setItem("appointments", JSON.stringify(appointments));
        }
    }
    });
    }

    // descriptions logic

    const desc = document.querySelectorAll(".description");

    desc.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");

        const panel = btn.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        });
    });

    // Count patients
    const appointmentData = JSON.parse(localStorage.getItem("appointments")) || [];

    const deviceCounts = {
    "Echocardiography": 0,
    "Electrocardiogram": 0,
    "Holter Monitoring": 0,
    "Stress Testing": 0,
    "Cardiac Catheterization": 0,
    "Pacemaker": 0,
    "Blood Pressure Monitoring": 0,
    "Consultation": 0,
    "Cardiac Surgery": 0,
    };

    appointmentData.forEach(app => {
    const type = app.type.toLowerCase();

    if (type.includes("echo")) deviceCounts["Echocardiography"]++;
    if (type.includes("ecg")) deviceCounts["Electrocardiogram"]++;
    if (type.includes("holter")) deviceCounts["Holter Monitoring"]++;
    if (type.includes("stress")) deviceCounts["Stress Testing"]++;
    if (type.includes("catheter")) deviceCounts["Cardiac Catheterization"]++;
    if (type.includes("pacemaker")) deviceCounts["Pacemaker"]++;
    if (type.includes("blood")) deviceCounts["Blood Pressure Monitoring"]++;
    if (type.includes("consult")) deviceCounts["Consultation"]++;
    if (type.includes("surgery")) deviceCounts["Cardiac Surgery"]++;
    });

    // Update HTML counters
    for (const [service, count] of Object.entries(deviceCounts)) {
    const id = service.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '') + "-counter";
    const el = document.getElementById(id);
    if (el) el.textContent = `${count} patient${count !== 1 ? "s" : ""}`;
    }

    // Add new patient account
    let patientAccounts = JSON.parse(localStorage.getItem("patientAccounts")) || [];

    const signUpButton = document.querySelector("button[type='patient-submit']");
    const signUpPage = document.title.includes("Sign Up");

    if (signUpButton && signUpPage) {
        signUpButton.addEventListener("click", () => {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const msg = document.querySelector(".patient-msg");

            if (!username || !password) {
                msg.textContent = "❌ Username and password are required.";
                msg.style.color = "red";
                return;
            }

            const exists = patientAccounts.some(acc => acc.username === username);

            if (exists) {
                msg.textContent = "❌ Username already exists.";
                msg.style.color = "red";
            } else {
                patientAccounts.push({ username, password });
                localStorage.setItem("patientAccounts", JSON.stringify(patientAccounts));
                msg.textContent = "✅ Account created successfully!";
                msg.style.color = "green";
                setTimeout(() => {
                    window.location.href = "../Schedule/schedule.html";
                }, 1000);
            }
        });
    }

    const psignInButton = document.querySelector("button[type='patient-submit']");
    const signInPage = document.title.includes("Sign In");

    if (psignInButton && signInPage) {
        psignInButton.addEventListener("click", () => {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const msg = document.querySelector(".patient-msg");

            // Patient login
            const user = patientAccounts.find(acc => acc.username === username && acc.password === password);

            if (user) {
            msg.textContent = "✅ Login successful!";
            msg.style.color = "green";
            localStorage.setItem("loggedInPatient", username); 
            setTimeout(() => {
                window.location.href = "../Schedule/schedule.html";
            }, 1000);
            } else {
                msg.textContent = "❌ Invalid username or password.";
                msg.style.color = "red";
            }
        });
    }

    // Delete Patient
    const pdeleteButton = document.querySelector("button#delete-account-button");
    const schedulepage = document.title.includes("Schedule");

    if (pdeleteButton && schedulepage) {
        pdeleteButton.addEventListener("click", () => {
            const username = localStorage.getItem("loggedInPatient");
            if (!username) {
                alert("No user is currently logged in.");
                return;
            }

            let patientAccounts = JSON.parse(localStorage.getItem("patientAccounts")) || [];

            patientAccounts = patientAccounts.filter(acc => acc.username !== username);

            localStorage.setItem("patientAccounts", JSON.stringify(patientAccounts));

            let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
            appointments = appointments.filter(app => app.patient !== username);
            localStorage.setItem("appointments", JSON.stringify(appointments));

            localStorage.removeItem("loggedInPatient");

            alert(" Your account and appointments have been deleted.");

            setTimeout(() => {
                window.location.href = "../../index.html";
            }, 1000);
        });
    }


});

