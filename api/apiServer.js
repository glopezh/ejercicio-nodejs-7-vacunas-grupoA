const express = require("express");

const app = express();
const morgan =require ("morgan");

// Middleware - morgan - ver lo que llega al servidor+

app.use(morgan("dev"));

// Starting the server

app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
