# 🫀 Cardiology Department Web Application

This project is a functional web-based system simulating the operations of a Cardiology Department. It allows patients to register, book appointments, and explore cardiology services. Doctors can view appointment schedules and monitor device usage statistics.

---

## 📁 Project Structure

```
├── index.html                 # Home / About Us
├── SingIn.html               # Doctor Login
├── patientSignin.html        # Patient Login
├── patientSignUp.html        # Patient Registration
├── schedule.html             # Patient Appointment Form
├── appointment.html          # Doctor Appointment List
├── Services.html             # Expandable Services List
├── Equipment.html            # Device Usage Table
├── contact.html              # Contact Form
├── signOutP.html             # Patient Sign Out
├── signout.html              # Doctor Sign Out
├── css/
│   ├── Styles.css
│   ├── header.css
│   ├── footer.css
│   ├── contact.css
│   ├── schedule.css
│   ├── SignIn.css
│   ├── services.css
│   ├── appointment.css
│   ├── eq.css
├── Script.js                 # Main JavaScript logic
└── Assets/                   # Images and icons
```

---

## ✅ Features

### 👤 Patient
- Register with name, email, and password
- Log in and schedule appointments
- Choose between cardiology services and surgery
- Schedule multiple appointments or sign out
- Input validated in real-time
- Data is saved using `localStorage`

### 👨‍⚕️ Doctor
- Logs in from a dedicated sign-in page
- Views appointments sorted by time
- Views how many patients are using each device
- Can mark appointments as "finished" (removes them)

### 📄 General
- Responsive and clean design
- Contact form with optional message and phone number
- All interactions handled on the frontend using JavaScript
- Modular CSS for page-specific styling

---

## 🧠 Technologies Used

- **HTML5**
- **CSS3** (custom and modular)
- **JavaScript** (Vanilla)
- **Google Fonts**: [Nunito](https://fonts.google.com/specimen/Nunito)
- **LocalStorage** for simulating backend persistence

---

## 🚀 Setup & Usage

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Navigate using the navbar to explore all features.
4. No backend required — fully frontend-based.

---

## 🧑‍🤝‍🧑 Team Members

| Name             | Responsibilities                                                                                                  |
|------------------|-------------------------------------------------------------------------------------------------------------------|
| Ebrahim Mohamed  | CSS layout,JavaScript logic and html, about page, sign in page for doctor and patients Appointments page for dr's |
| Mohamed Jameel   | JavaScript logic and html, scheduling system, equipment UI, Services Page, sign out page                          |

---

## 🗂 Task Distribution (README Summary)

- **Patient pages**: Sign in/up, schedule, sign out – built with validation and dynamic counter handling.
- **Doctor pages**: Appointment and equipment view using localStorage-driven data.
- **Styling**: Each page has a dedicated CSS file for maintainability.

---

## 🧪 Extras

- 🎯 LocalStorage logic for booking and sign-in
- 📊 Device counter system
- 🖼 Flowcharts and architecture diagram included in the report

---

## 📌 Notes

- Backend/database not required (bonus only)
- Every team had to work on a unique department
- Architecture diagram and report also submitted with the project

---

## 📞 Contact

For any questions, visit the [Contact](contact.html) page and leave your email.
