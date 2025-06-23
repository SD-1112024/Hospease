const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // ✅ your MySQL Workbench user
  password: 'sonu23',           // 🔑 your MySQL password here (empty if none)
  database: 'hospital'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL as Sonu');
});

module.exports = db;
