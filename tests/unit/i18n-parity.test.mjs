import test from "node:test";
import assert from "node:assert";
import { translations } from "../../src/i18n/translations.ts";

function assertMatchingKeys(baseObj, targetObj, path = "") {
  for (const key of Object.keys(baseObj)) {
    const currentPath = path ? `${path}.${key}` : key;
    assert.ok(
      key in targetObj,
      `Missing translation key: "${currentPath}" is present in English but missing in target locale.`,
    );

    const baseVal = baseObj[key];
    const targetVal = targetObj[key];

    if (typeof baseVal === "object" && baseVal !== null) {
      assert.strictEqual(
        typeof targetVal,
        "object",
        `Type mismatch at "${currentPath}": expected object, got ${typeof targetVal}`,
      );
      assertMatchingKeys(baseVal, targetVal, currentPath);
    } else {
      assert.strictEqual(
        typeof targetVal,
        "string",
        `Type mismatch at "${currentPath}": expected string, got ${typeof targetVal}`,
      );
      assert.ok(
        targetVal.trim().length > 0,
        `Empty translation string at "${currentPath}"`,
      );
    }
  }
}

test("i18n parity: French translations have all keys present in English", () => {
  assertMatchingKeys(translations.en, translations.fr, "fr");
});

test("i18n parity: Chinese translations have all keys present in English", () => {
  assertMatchingKeys(translations.en, translations.zh, "zh");
});
