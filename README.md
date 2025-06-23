# Hospease
Full stack Development mini project - Hospital management system

# 🏥 Hospease - Hospital Management System

**Hospease** is a colorful, beginner-friendly full-stack web application to manage patient records, doctor information, appointments, and billing in a hospital or clinic.

> 📌 Built using Node.js, Express, MySQL, HTML, CSS (Bootstrap), and JavaScript.

---

## 🔧 Features

- ✅ Add / update / delete **Patients**
- ✅ Add / update / delete **Doctors**
- ✅ Book and manage **Appointments**
- ✅ Generate and view **Bills**
- ✅ All data stored in a **MySQL Database**
- ✅ Clean, responsive & colorful UI using **Bootstrap 5**

---

## 📁 Project Structure

hospease/
├── public/
│ ├── index.html
│ ├── doctors.html
│ ├── patients.html
│ ├── appointments.html
│ ├── billing.html
├── server.js
├── db.js
├── package.json
├── package-lock.json
├── README.md


---

## 🛠️ Tech Stack

| Layer        | Technology              |
|--------------|--------------------------|
| Frontend     | HTML, CSS (Bootstrap 5), JavaScript |
| Backend      | Node.js with Express     |
| Database     | MySQL                    |
| Styling      | Gradient-based UI        |
| API          | RESTful API with Express |

---

## 🗃️ Database Setup

Open **MySQL Workbench** or any MySQL client and run:

```sql
CREATE DATABASE hospital;
USE hospital;

-- Patient Table
CREATE TABLE Patient (
  patientid INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  gender VARCHAR(10),
  contactnumber VARCHAR(15),
  address VARCHAR(100),
  bloodgroup VARCHAR(10),
  AdmissionDate DATE
);

-- Doctor Table
CREATE TABLE Doctor (
  DoctorID INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(50),
  Specialty VARCHAR(50),
  Contact VARCHAR(15),
  Email VARCHAR(50)
);

-- Appointment Table
CREATE TABLE Appointment (
  AppointmentID INT AUTO_INCREMENT PRIMARY KEY,
  PatientID INT,
  DoctorID INT,
  Date DATE,
  Time TIME
);

-- Billing Table
CREATE TABLE Billing (
  BillID INT AUTO_INCREMENT PRIMARY KEY,
  PatientID INT,
  BillingDate DATE,
  Services_Provided VARCHAR(100),
  Amount DECIMAL(10,2)
);


## 🚀 How to Run This Project Locally

### 1. Clone the repository

git clone https://github.com/SD-1112024/hospease.git
cd hospease

### 2. Install Dependencies

npm install

### 3. Configure MySQL in db.js

Edit the db.js file:
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'hospital'
});

### 4. Start the Server

npm start

## 🌐 Open the Application
Visit in your browser:

http://localhost:3000/index.html

## 💡 Future Enhancements

1. Admin login and authentication

2. Search/filter by patient name or ID

3. PDF export of billing details

4. Improved mobile responsiveness

5. Notification/reminder system
