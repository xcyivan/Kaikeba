const mysql = require('mysql');
const cfg = {
    host: 'localhost',
    port: 8889,
    user: 'kaikeba_admin',
    password: 'kaikeba_admin',
    database: 'kaikeba',
  };

module.exports = {
    query: (sql, value) => {
        return new Promise((resolve, reject) => {
            console.log('connecting to db');
            const conn = mysql.createConnection(cfg);
            conn.connect(); // 此步骤可省
            conn.query(sql, value, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
            conn.end();
        });
    },
};