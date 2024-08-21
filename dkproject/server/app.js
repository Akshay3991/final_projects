const express = require("express");
const bodyParser = require("body-parser");
const { getStoredServices, storeServices } = require("./data/service");

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/services", async (req, res) => {
  const storedServices = await getStoredServices();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 4000));
  res.json({ services: storedServices });
});

app.get("/services/:id", async (req, res) => {
  const storedServices = await getStoredServices();
  const service = storedServices.find(
    (service) => service.id === req.params.id
  );
  res.json({ service });
});

app.post("/services", async (req, res) => {
  const existingServices = await getStoredServices();
  const serviceData = req.body;
  const newService = {
    ...serviceData,
    id: Math.random().toString(),
  };
  const updatedServices = [newService, ...existingServices];
  await storeServices(updatedServices);
  res.status(201).json({ message: "Stored new service.", service: newService });
});

app.listen(8080);
