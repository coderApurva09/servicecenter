import axios from "axios";

export default axios.create({
 //baseURL: "http://smartkidzwakad.aaditechnology.com:8081",
   baseURL: "http://localhost:50291/",
  // baseURL: "http://192.168.1.59:8080/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});