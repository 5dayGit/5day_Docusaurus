const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const assetsDir = path.join(buildDir);
const targetDir = path.join(buildDir, "lunr");

console.log("📁 Build finished. Searching for Lunr files...");

function copyLunrFiles() {
  if (!fs.existsSync(assetsDir)) {
    console.log("❌ assets folder does not exist yet. Retrying...");
    return false;
  }

  const files = fs.readdirSync(assetsDir)
    .filter((f) => /^(lunr-index|search-doc).*\.json$/.test(f));

  if (files.length === 0) {
    console.log("⏳ Lunr files not created yet. Retrying...");
    return false;
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  files.forEach((file) => {
    fs.copyFileSync(
      path.join(assetsDir, file),
      path.join(targetDir, file)
    );
    console.log("✔ Copied:", file);
  });

  console.log("🎉 Lunr files copied to /build/lunr/");
  return true;
}

// Try every 300ms until files appear
let attempts = 0;
const interval = setInterval(() => {
  attempts++;

  if (copyLunrFiles()) {
    clearInterval(interval);
  }

  // Safety timeout
  if (attempts > 30) {
    console.log("❌ Timeout — Lunr files never appeared.");
    clearInterval(interval);
  }
}, 300);
