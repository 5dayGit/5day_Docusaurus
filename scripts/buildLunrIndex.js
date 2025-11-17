const fs = require("fs");
const path = require("path");
const lunr = require("lunr");

const buildDir = path.join(__dirname, "..", "build");
const rawInputPath = path.join(buildDir, "search-index.json");
const outputDir = path.join(buildDir, "lunr");
const outputPath = path.join(outputDir, "search-index.json");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log("📁 Created folder:", outputDir);
}

// Read raw file
const raw = JSON.parse(fs.readFileSync(rawInputPath, "utf8"));

// 🚨 FIX: Extract docs properly
const rawDocs = raw[0]?.documents ?? [];

console.log("📌 Loaded raw docs:", rawDocs.length);

// Normalize docs
const docs = rawDocs.map((doc, idx) => ({
  id: String(doc.i ?? idx),
  title: doc.t ?? "",
  url: doc.u ?? "",
  breadcrumbs: doc.b ?? []
}));

// Build Lunr index
const index = lunr(function () {
  this.ref("id");
  this.field("title", { boost: 10 });
  this.field("url");
  this.field("breadcrumbs");

  docs.forEach((d) => this.add(d));
});

const finalJson = {
  index: index.toJSON(),
  docs: docs
};

fs.writeFileSync(outputPath, JSON.stringify(finalJson, null, 2));

console.log("✔ Lunr index created at:", outputPath);
