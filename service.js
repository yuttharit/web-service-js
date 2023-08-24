const express = require("express");
const axios = require("axios");
const cors = require("cors");

//region
const app = express();
app.use(
  cors({
    methods: ["GET", "POST"],
  })
);

let dbcon = "https://server-json-profile.onrender.com";

//root path
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/fetch_core_menu", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/MENU_WEB`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/fetch_social_detail", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/SOCIAL_DETAIL`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/fetch_profile_info", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/PROFILE_INFO`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/fetch_about_info", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/ABOUT_INFO`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/fetch_about_info_desc", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/ABOUT_INFO_DESC`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/fetch_skills_programming", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/SKILLS_PROGRAMMING`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});
app.get("/fetch_education_info", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/EDUCATION_INFO`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/fetch_work_info", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/WORK`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/fetch_service_on_work", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/SERVICE_ON_WORK`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.get("/fetch_portfolio", async (req, res) => {
  try {
    const response = await axios.get(`${dbcon}/PORTFOLIO`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.listen(3000, () => {
  console.log("server is runing on port 3000 !!!");
});
