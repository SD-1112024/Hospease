const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//PATIENT
app.post('/add-patient', (req, res) => {
  const { name, age, gender, contactnumber,address,bloodgroup,admissiondate} = req.body;
  const query = 'INSERT INTO Patient (name, age, gender, contactnumber,address,bloodgroup,AdmissionDate  ) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, age, gender, contactnumber,address,bloodgroup,admissiondate], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.get('/patients', (req, res) => {
  db.query('SELECT *,DATE_FORMAT(AdmissionDate, \'%d-%m-%Y\') AS AdmissionDate_Disp,DATE_FORMAT(AdmissionDate, \'%Y-%m-%d\') AS AdmissionDate_Set FROM Patient', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put('/update-patient/:id', (req, res) => {
  const { name, age, gender, contactnumber,address,bloodgroup,admissiondate } = req.body;
  const id = req.params.id;
  db.query('UPDATE Patient SET name = ?, age = ?, gender = ?, contactnumber = ?, address = ?, bloodgroup = ?, admissiondate = ? WHERE patientid = ?', [name, age, gender, contactnumber,address,bloodgroup,admissiondate,id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.delete('/delete-patient/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Patient WHERE patientid = ?', [id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

//DOCTOR
app.post('/add-doctor', (req, res) => {
  const { name,specialty, contact,email} = req.body;
  const query = 'INSERT INTO Doctor (Name, Specialty,Contact,Email  ) VALUES (?, ?, ?, ?)';
  db.query(query, [name,specialty, contact,email], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.get('/doctors', (req, res) => {
  db.query('SELECT * FROM Doctor', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put('/update-doctor/:id', (req, res) => {
  const { name,specialty, contact,email } = req.body;
  const id = req.params.id;
  db.query('UPDATE Doctor SET Name = ?, Specialty = ?, Contact = ?, Email = ? WHERE DoctorID = ?', [name,specialty, contact,email ,id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.delete('/delete-doctor/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Doctor WHERE DoctorID = ?', [id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

//APPOINTMENT
app.post('/add-appointment', (req, res) => {
  const { patient_id,doctor_id, date,time} = req.body;
  const query = 'INSERT INTO Appointment (PatientID, DoctorID,Date,Time ) VALUES (?, ?, ?, ?)';
  db.query(query, [patient_id,doctor_id, date,time], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.get('/appointments', (req, res) => {
  db.query('select a.*,DATE_FORMAT(Date, \'%d-%m-%Y\') AS Date_Disp,DATE_FORMAT(Date, \'%Y-%m-%d\') AS Date_Set ,p.name PName,d.Name DName'+ 
' from Appointment a'+
' inner join patient p on p.patientid = a.PatientID'+
' inner join doctor d on d.DoctorID = a.DoctorID',
  (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put('/update-appointment/:id', (req, res) => {
  const { patient_id,doctor_id, date,time } = req.body;
  const id = req.params.id;
  db.query('UPDATE Appointment SET PatientID = ?, DoctorID = ?, Date = ?, Time = ? WHERE AppointmentID = ?', [patient_id,doctor_id, date,time,id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.delete('/delete-appointment/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Appointment WHERE AppointmentID = ?', [id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

//BILLING
app.post('/add-bill', (req, res) => {
  const { patient_id,date,services,amount} = req.body;
  const query = 'INSERT INTO Billing (PatientID, BillingDate,Services_Provided,Amount) VALUES (?, ?, ?, ?)';
  db.query(query, [patient_id,date,services,amount], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.get('/bills', (req, res) => {
   db.query('SELECT *,DATE_FORMAT(BillingDate, \'%d-%m-%Y\') AS BillDate_Disp,DATE_FORMAT(BillingDate, \'%Y-%m-%d\') AS BillDate_Set FROM Billing', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put('/update-bill/:id', (req, res) => {
  const { patient_id,date,services,amount } = req.body;
  const id = req.params.id;
  db.query('UPDATE Billing SET PatientID = ?, BillingDate = ?, Services_Provided = ?, Amount = ? WHERE BillID = ?', [patient_id,date,services,amount,id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.delete('/delete-bill/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Billing WHERE BillID = ?', [id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
