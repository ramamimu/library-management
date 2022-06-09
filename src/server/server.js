const express = require("express");
const cors = require("cors");
const { Client } = require("pg");
const types = require("pg").types;

const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "FP_K06",
  password: "pass123",
  port: 5432,
});

client.connect();

app.post("/pengunjung", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from pengunjungBulanan", (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send");
    } else {
      console.log(err);
    }
  });

  console.log(request.body);
});

app.post("/peminjam", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from peminjam_jurusan", (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});

app.post("/tabel_peminjaman", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("select * from get_pinjam", (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});

app.post("/pinjam_buku", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from peminjam_bulan", (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      // res.rows.forEach((data) => {
      //   types.setTypeParser(1114, function (data) {
      //     console.log(data);
      //   });
      // });
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});

app.post("/delete_tabel_peminjaman", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  let queryWord =
    "DELETE FROM peminjaman WHERE id_peminjaman = " + request.body.message;
  console.log("=>>>> ", queryWord);
  client.query(queryWord, (err, res) => {
    if (!err) {
      // console.log(res.rows);
      // console.log(typeof res.rows);
      // let someObj = "sesuatu";
      // someObj = JSON.stringify(res.rows);
      response.json("OKE");
      // console.log("success to send");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});

app.post("/pinjam_buku", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query("SELECT * from peminjam_bulan", (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      // res.rows.forEach((data) => {
      //   types.setTypeParser(1114, function (data) {
      //     console.log(data);
      //   });
      // });
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});
app.post("/delete_tabel_peminjaman", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  let queryWord =
    "DELETE FROM peminjaman WHERE id_peminjaman = " + request.body.message;
  console.log("=>>>> ", queryWord);
  client.query(queryWord, (err, res) => {
    if (!err) {
      // console.log(res.rows);
      // console.log(typeof res.rows);
      // let someObj = "sesuatu";
      // someObj = JSON.stringify(res.rows);
      response.json("OKE");
      // console.log("success to send");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});

app.post("/insert_data", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query(request.body.message, (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send insert");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});

app.post("/update_data", (request, response) => {
  const temp = JSON.stringify({
    message: "a message from server",
  });
  client.query(request.body.message, (err, res) => {
    if (!err) {
      console.log(res.rows);
      console.log(typeof res.rows);
      let someObj = "sesuatu";
      someObj = JSON.stringify(res.rows);
      response.json(someObj);
      console.log("success to send insert");
    } else {
      console.log(err);
    }
  });
  console.log(request.body);
});

app.listen(port, function () {
  console.log("listening on port ", port);
});
