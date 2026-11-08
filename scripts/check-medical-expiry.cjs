const fs = require("fs");
const path = require("path");

const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
const MEDICAL_COLLECTIONS = ["journey", "tumors", "symptoms"];
const CONTENT_DIR = path.join(__dirname, "../src/content");
let hasErrors = false;
let checkedCount = 0;

function checkMedicalFile(filePath) {
  checkedCount++;
  const content = fs.readFileSync(filePath, "utf-8");

  // Extract last_medically_reviewed_date using frontmatter regex
  const match = content.match(
    /last_medically_reviewed_date:\s*"?(\d{4}-\d{2}-\d{2})"?/,
  );

  if (!match || !match[1]) {
    console.error(`🚨 MISSING MEDICAL REVIEW DATE: ${filePath}`);
    console.error(
      `   Medical files must define a valid last_medically_reviewed_date.`,
    );
    hasErrors = true;
    return;
  }

  const reviewDateStr = match[1];
  const reviewDate = new Date(reviewDateStr);
  if (isNaN(reviewDate.getTime())) {
    console.error(
      `🚨 INVALID MEDICAL REVIEW DATE: ${filePath} (${reviewDateStr})`,
    );
    hasErrors = true;
    return;
  }

  const now = new Date();
  const diff = now - reviewDate;

  if (diff > ONE_YEAR_MS) {
    console.error(`🚨 EXPIRED MEDICAL CONTENT: ${filePath}`);
    console.error(
      `   Last reviewed on ${reviewDateStr}. It has been over 1 year. Needs clinical review!`,
    );
    hasErrors = true;
  } else {
    console.log(`✅ ${filePath} is up to date (reviewed ${reviewDateStr}).`);
  }
}

function scanMedicalCollections() {
  for (const collection of MEDICAL_COLLECTIONS) {
    const colDir = path.join(CONTENT_DIR, collection);
    if (!fs.existsSync(colDir)) continue;

    for (const lang of ["en", "fr", "zh"]) {
      const langDir = path.join(colDir, lang);
      if (!fs.existsSync(langDir)) continue;

      const files = fs.readdirSync(langDir).filter((f) => f.endsWith(".md"));
      for (const file of files) {
        checkMedicalFile(path.join(langDir, file));
      }
    }
  }
}

console.log(
  "Checking medical content expiry across all clinical collections...",
);
scanMedicalCollections();

console.log(`\nVerified ${checkedCount} medical files.`);

if (hasErrors) {
  console.error("❌ Medical expiry check failed.");
  process.exit(1);
} else {
  console.log(
    "✅ All medical content is verified and within the 1-year review window.",
  );
  process.exit(0);
}
