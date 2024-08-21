const fs = require("node:fs/promises");

async function getStoredServices() {
  const rawFileContent = await fs.readFile("services.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storeServices = data.services ?? [];
  return storeServices;
}

function storeServices(services) {
  return fs.writeFile(
    "services.json",
    JSON.stringify({ services: services || [] })
  );
}

exports.getStoredServices = getStoredServices;
exports.storeServices = storeServices;
