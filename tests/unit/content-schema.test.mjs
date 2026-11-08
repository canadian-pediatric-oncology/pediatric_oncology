import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = "src/content";
const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
const SIX_MONTHS_MS = 183 * 24 * 60 * 60 * 1000;

test("Content Schema: Medical collections (journey, tumors, symptoms) have valid review dates", () => {
  const collections = ["journey", "tumors", "symptoms"];
  const locales = ["en", "fr", "zh"];
  let fileCount = 0;

  for (const col of collections) {
    for (const lang of locales) {
      const dir = path.join(CONTENT_DIR, col, lang);
      if (!fs.existsSync(dir)) continue;

      const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
      assert.ok(files.length > 0, `Directory ${dir} has no markdown files`);

      for (const file of files) {
        fileCount++;
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, "utf8");

        // Verify title (handles double quotes, single quotes, or unquoted)
        const dQuote = content.match(/^title:\s*"([^"]+)"/m);
        const sQuote = content.match(/^title:\s*'([^']+)'/m);
        const uQuote = content.match(/^title:\s*([^"'\r\n][^\r\n]*)$/m);
        const title = dQuote
          ? dQuote[1]
          : sQuote
            ? sQuote[1]
            : uQuote
              ? uQuote[1]
              : "";
        assert.ok(
          title.trim().length > 0,
          `Missing or empty title in ${filePath}`,
        );

        // Verify last_medically_reviewed_date
        const dateMatch = content.match(
          /last_medically_reviewed_date:\s*"(\d{4}-\d{2}-\d{2})"/,
        );
        assert.ok(
          dateMatch,
          `Missing or invalid last_medically_reviewed_date in ${filePath}`,
        );

        const reviewDate = new Date(dateMatch[1]);
        assert.ok(
          !isNaN(reviewDate.getTime()),
          `Invalid date format in ${filePath}: ${dateMatch[1]}`,
        );

        const now = new Date();
        const diff = now.getTime() - reviewDate.getTime();
        assert.ok(
          diff <= ONE_YEAR_MS,
          `Medical review expired in ${filePath}: reviewed ${dateMatch[1]}`,
        );
      }
    }
  }

  assert.strictEqual(
    fileCount,
    78,
    "Expected exactly 78 medical files across 3 languages",
  );
});

test("Content Schema: Charities collection has valid HTTPS URLs, services, and verification dates across all locales", () => {
  const locales = ["en", "fr", "zh"];
  let totalCharities = 0;

  for (const lang of locales) {
    const dir = path.join(CONTENT_DIR, "charities", lang);
    assert.ok(fs.existsSync(dir), `Missing charities directory for ${lang}`);

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    assert.ok(
      files.length >= 15,
      `Expected >= 15 charities in ${lang}, got ${files.length}`,
    );

    for (const file of files) {
      totalCharities++;
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, "utf8");

      // Verify URL
      const urlMatch = content.match(/url:\s*"([^"]+)"/);
      assert.ok(urlMatch, `Missing url in ${filePath}`);
      const url = urlMatch[1];
      assert.ok(
        url.startsWith("https://"),
        `Charity URL in ${filePath} must be HTTPS, got: ${url}`,
      );
      assert.ok(
        !url.includes("localhost"),
        `Charity URL in ${filePath} cannot be localhost`,
      );

      // Verify scope
      const scopeMatch = content.match(
        /scope:\s*"?(national|provincial|indigenous|international)"?/,
      );
      assert.ok(scopeMatch, `Missing or invalid scope in ${filePath}`);

      // Verify services list
      const hasServices = content.includes("services:");
      assert.ok(hasServices, `Missing services list in ${filePath}`);

      // Verify last_verified_date
      const dateMatch = content.match(
        /last_verified_date:\s*['"]?([\d-]+)['"]?/,
      );
      assert.ok(dateMatch, `Missing last_verified_date in ${filePath}`);
      const date = new Date(dateMatch[1]);
      assert.ok(
        !isNaN(date.getTime()),
        `Invalid date format in ${filePath}: ${dateMatch[1]}`,
      );

      const now = new Date();
      const diff = now.getTime() - date.getTime();
      assert.ok(
        diff <= SIX_MONTHS_MS,
        `Charity verification expired in ${filePath}: verified ${dateMatch[1]}`,
      );
    }
  }

  assert.strictEqual(
    totalCharities,
    45,
    "Expected exactly 45 charity files (15 per locale)",
  );
});

test("Content Schema: Provinces collection has 13 Canadian provinces/territories per locale with valid hospitals", () => {
  const locales = ["en", "fr", "zh"];

  for (const lang of locales) {
    const dir = path.join(CONTENT_DIR, "provinces", lang);
    assert.ok(fs.existsSync(dir), `Missing provinces directory for ${lang}`);

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    assert.strictEqual(
      files.length,
      13,
      `Expected exactly 13 provinces/territories in ${lang}, got ${files.length}`,
    );

    for (const file of files) {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, "utf8");

      // Ensure no empty string URLs
      assert.ok(!content.includes('url: ""'), `Found empty URL in ${filePath}`);
      assert.ok(
        content.includes("hospitals:"),
        `Missing hospitals section in ${filePath}`,
      );
      assert.ok(
        content.includes("financial:"),
        `Missing financial section in ${filePath}`,
      );
    }
  }
});

test("Checklists Data: hospital bag, emergency fever protocol, and tracker are defined across all locales", async () => {
  const { checklistsData } = await import("../../src/data/checklistsData.ts");
  const locales = ["en", "fr", "zh"];

  for (const lang of locales) {
    const data = checklistsData[lang];
    assert.ok(data, `Missing checklist data for locale ${lang}`);
    assert.ok(data.title.trim().length > 0, `Empty title for ${lang}`);
    assert.ok(data.printBtn.trim().length > 0, `Empty printBtn for ${lang}`);

    // Hospital bag
    assert.ok(
      data.hospitalBag.childItems.length >= 5,
      `Expected >= 5 child items in ${lang}`,
    );
    assert.ok(
      data.hospitalBag.parentItems.length >= 5,
      `Expected >= 5 parent items in ${lang}`,
    );
    assert.ok(
      data.hospitalBag.docItems.length >= 3,
      `Expected >= 3 doc items in ${lang}`,
    );

    // Fever protocol
    assert.ok(
      data.fever.doItems.length >= 4,
      `Expected >= 4 fever action items in ${lang}`,
    );
    assert.ok(
      data.fever.hospItems.length >= 2,
      `Expected >= 2 hospital action items in ${lang}`,
    );
    assert.ok(
      data.fever.warning.includes("⚠️"),
      `Warning banner missing emoji in ${lang}`,
    );

    // Tracker
    assert.strictEqual(
      data.tracker.days.length,
      8,
      `Expected 8 tracker column headers (7 days + Notes) in ${lang}`,
    );
    assert.ok(
      data.tracker.rows.length >= 8,
      `Expected >= 8 tracker rows in ${lang}`,
    );
  }
});
