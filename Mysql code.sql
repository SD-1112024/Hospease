CREATE DATABASE IF NOT EXISTS hospital;
USE hospital;

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

CREATE TABLE Doctor (
  DoctorID INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(50),
  Specialty VARCHAR(50),
  Contact VARCHAR(15),
  Email VARCHAR(50)
);

CREATE TABLE Appointment (
  AppointmentID INT AUTO_INCREMENT PRIMARY KEY,
  PatientID INT,
  DoctorID INT,
  Date DATE,
  Time TIME
);

CREATE TABLE Billing (
  BillID INT AUTO_INCREMENT PRIMARY KEY,
  PatientID INT,
  BillingDate DATE,
  Services_Provided VARCHAR(100),
  Amount DECIMAL(10,2)
);

SELECT * FROM Patient;
SELECT * FROM Doctor;
SELECT * FROM Appointment;
SELECT * FROM Billing;
