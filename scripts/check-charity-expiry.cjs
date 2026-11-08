const fs = require("fs");
const path = require("path");

const baseCharitiesDir = path.join(
  __dirname,
  "..",
  "src",
  "content",
  "charities",
);
let expiredCount = 0;
let totalCount = 0;

const sixMonthsAgo = new Date();
sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

console.log(
  "Checking charity verification dates across all locales (en, fr, zh)...\n",
);

for (const lang of ["en", "fr", "zh"]) {
  const dir = path.join(baseCharitiesDir, lang);
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  files.forEach((file) => {
    totalCount++;
    const content = fs.readFileSync(path.join(dir, file), "utf8");
    const match = content.match(/last_verified_date:\s*['"]?([\d-]+)['"]?/);
    if (match) {
      const date = new Date(match[1]);
      if (isNaN(date.getTime()) || date < sixMonthsAgo) {
        expiredCount++;
        console.log(`EXPIRED: [${lang}] ${file} (Last verified: ${match[1]})`);
      }
    } else {
      console.log(`WARNING: [${lang}] ${file} has no last_verified_date`);
      expiredCount++;
    }
  });
}

console.log(
  `\nSummary: ${expiredCount} expired out of ${totalCount} charities checked.`,
);

if (expiredCount > 0) {
  process.exit(1);
} else {
  console.log(
    "✅ All charity resources across all locales are verified within 6 months.",
  );
  process.exit(0);
}
