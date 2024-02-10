require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGPASSWORD,
  password: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

client.connect();

app.post("/pengunjung", (request, response) => {
  client.query("SELECT * from pengunjungBulanan", (err, res) => {
    if (!err) {
      let someObj = JSON.stringify(res.rows);
      response.json(someObj);
    } else {
      console.log(err);
    }
  });
});

app.post("/peminjam", (request, response) => {
  client.query("SELECT * from peminjam_jurusan", (err, res) => {
    if (!err) {
      let someObj = JSON.stringify(res.rows);
      response.json(someObj);
    } else {
      console.log(err);
    }
  });
});

app.post("/tabel_peminjaman", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("select * from get_pinjam", (err, res) => {
    if (!err) {
      let someObj = JSON.stringify(res.rows);
      response.json(someObj);
    } else {
      console.log(err);
    }
  });
});

app.post("/pinjam_buku", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from peminjam_bulan", (err, res) => {
    if (!err) {
      let someObj = JSON.stringify(res.rows);
      response.json(someObj);
    } else {
      console.log(err);
    }
  });
});

app.post("/delete_tabel_peminjaman", (request, response) => {
  let queryWord =
    "DELETE FROM peminjaman WHERE id_peminjaman = " + request.body.message;
  client.query(queryWord, (err, res) => {
    if (!err) {
      response.json("OKE");
    } else {
      console.log(err);
    }
  });
});

app.post("/pinjam_buku", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from peminjam_bulan", (err, res) => {
    if (!err) {
      let someObj = JSON.stringify(res.rows);
      response.json(someObj);
    } else {
      console.log(err);
    }
  });
});

app.post("/delete_tabel_peminjaman", (request, response) => {
  let queryWord =
    "DELETE FROM peminjaman WHERE id_peminjaman = " + request.body.message;
  client.query(queryWord, (err, res) => {
    if (!err) {
      response.json({ status: "success" });
    } else {
      console.log(err);
    }
  });
});

app.post("/insert_data", (request, response) => {
  client.query(request.body.message, (err, res) => {
    if (!err) {
      let someObj = JSON.stringify(res.rows);
      response.json(someObj);
    } else {
      console.log(err);
    }
  });
});

app.post("/update_data", (request, response) => {
  client.query(request.body.message, (err, res) => {
    if (!err) {
      let someObj = JSON.stringify(res.rows);
      response.json(someObj);
    } else {
      console.log(err);
    }
  });
});

app.listen(port, function () {
  console.log("listening on port ", port);
});
