const fs = require("node:fs/promises");

async function getStoredFormData() {
  const rawFileContent = await fs.readFile("form.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storeFormData = data.details ?? [];
  return storeFormData;
}

function storeFormData(details) {
  return fs.writeFile("form.json", JSON.stringify({ details: details || [] }));
}

exports.getStoredFormData = getStoredFormData;
exports.storeFormData = storeFormData;
