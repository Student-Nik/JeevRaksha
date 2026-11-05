
# 🐾 JeevRaksha – Veterinary Care Management System

**Empowering Animal Health Through Technology**

JeevRaksha is a veterinary care and animal health management system designed to connect farmers and pet owners with veterinary doctors. It provides an easy way to request appointments and helps doctors manage appointments, maintain animal medical records, and track every veterinary visit.

## 🚀 Project Overview

JeevRaksha provides two main interfaces:

- **Farmer / Pet Owner:** Browse veterinary services and request appointments online.
- **Veterinary Doctor:** Access appointment requests, manage consultations, and maintain detailed medical records for every animal visit.

## ✨ Key Features

### 🧑‍🌾 Farmer / Pet Owner
- View veterinary services and facilities.
- Explore information about animals.
- Book veterinary appointments online.
- Submit animal and owner details.
- Send appointment requests to the veterinary doctor.

### 🩺 Veterinary Doctor
- Doctor login.
- View incoming appointment requests.
- Manage appointment information.
- Maintain detailed records for every animal visit.
- Track previous veterinary visits.
- Generate visit records in PDF format.

### 📋 Animal Medical Records
- Animal information and identification.
- Medical history.
- Symptoms and observations.
- Diagnosis and treatment details.
- Prescribed medicines.
- Follow-up recommendations.

## 🛠️ Technology Stack

### Frontend
- React.js
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Development Tools
- Visual Studio Code
- Git & GitHub
- Postman
- npm

## 📁 Project Structure

```text
JeevRaksha/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites
- Node.js
- npm
- MySQL
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Student-Nik/JeevRaksha.git
cd JeevRaksha
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open the URL displayed in your terminal.

### 3. Backend Setup

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

Configure the database connection and environment variables before starting the backend.

## 🔐 Environment Configuration

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jeevraksha
```

Replace the database credentials with your local MySQL configuration.

**Important:** Never commit your `.env` file or expose database credentials and secret keys publicly.

## 🎯 Project Goals

- Digitize veterinary appointment booking.
- Simplify communication between farmers and veterinary doctors.
- Maintain organized animal medical histories.
- Reduce manual paperwork.
- Improve accessibility to veterinary healthcare services.

## 🚧 Project Status

**Development in Progress**

| Module | Status |
|---|---|
| Frontend Website | Completed |
| Doctor Interface | Initial implementation |
| Backend Setup | Completed |
| Database Integration | In Progress |
| Appointment Management | Planned |
| Doctor Visit Management | Planned |
| PDF Medical Reports | Planned |

## 👨‍💻 Developer

**Nikhil Kute**

Java Backend Developer | Software Developer

GitHub: [Student-Nik](https://github.com/Student-Nik)

## 📄 License

This project is developed for educational and practical purposes. Licensing details will be added later.

---

**JeevRaksha – Better Care, Healthier Animals, Stronger Communities.** 🐾
