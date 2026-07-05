const fs = require("fs");
const path = require("path");

// Get the new project name from the command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error(
    "❌ Please specify a new folder name: npm run generate <project-name>",
  );
  process.exit(1);
}

// Set source (current boilerplate) and target (new folder next to boilerplate)
const sourceDir = path.resolve("template", "vite");
const targetDir = path.resolve("apps", projectName);

// Files and folders we do NOT want to copy
const itemsToExclude = [
  "node_modules",
  ".git",
  "dist",
  "build",
  "generate.js",
  "package-lock.json",
];

console.log(`🚀 Generating new project: ${projectName}...`);

try {
  // 1. Copy the directory (Requires Node.js 16.7+)
  fs.cpSync(sourceDir, targetDir, {
    recursive: true,
    filter: (src) => {
      const basename = path.basename(src);
      return !itemsToExclude.includes(basename);
    },
  });

  // 2. Inject "new data" into the copied package.json
  const targetPackageJsonPath = path.join(targetDir, "package.json");

  if (fs.existsSync(targetPackageJsonPath)) {
    const pkg = JSON.parse(fs.readFileSync(targetPackageJsonPath, "utf8"));

    // Update the package details
    pkg.name = projectName.toLowerCase().replace(/\s+/g, "-");
    pkg.version = "0.1.0";
    pkg.description = "";

    // Remove the generator script from the new project
    if (pkg.scripts && pkg.scripts.generate) {
      delete pkg.scripts.generate;
    }

    // Write the updated package.json back to the new folder
    fs.writeFileSync(targetPackageJsonPath, JSON.stringify(pkg, null, 2));
  }

  console.log(`✅ Success! Boilerplate copied to: ${targetDir}`);
  console.log(`\nNext steps:`);
  console.log(`  cd ../${projectName}`);
  console.log(`  npm install`);
  console.log(`  npm run dev\n`);
} catch (error) {
  console.error("❌ Error generating project:", error);
}
