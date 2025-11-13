const fs = require("fs");
const path = require("path");

module.exports = function copyLunrIndexPlugin() {
  return {
    name: "copy-lunr-index-plugin",

    async postBuild({ outDir }) {
      console.log("outDir =", outDir);
      console.log("Available files in build:", fs.readdirSync(outDir));

      console.log("🔎 CopyLunrIndexPlugin: Searching for Lunr files...");

      // Lunr writes files directly into build/
      const sourceDir = outDir;

      // Create target folder: build/lunr/
      const targetDir = path.join(outDir, "lunr");
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir);
      }

      // Match all lunr-index*.json & search-doc*.json files
      const files = fs.readdirSync(sourceDir).filter((file) =>
        file.match(/^(lunr-index|search-doc).*\.json$/)
      );

      if (files.length === 0) {
        console.warn("⚠️ No Lunr index files found in build/, skipping copy.");
        return;
      }

      // Copy all Lunr files
      files.forEach((file) => {
        const src = path.join(sourceDir, file);
        const dest = path.join(targetDir, file);

        fs.copyFileSync(src, dest);
        console.log(`✓ Copied: ${file}`);
      });

      console.log("🎉 Lunr index copying completed!");
    },
  };
};
