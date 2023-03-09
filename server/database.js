import { Client } from "pg";

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "3002",
  password: "rootUser",
  database: "postgres",
});

client.connect();

client.query(`Select * from employees`, (err, res) => {
  if (!err) {
    constole.log(res.name);
  } else {
    console.log(err.message);
  }
  client.end;
});
