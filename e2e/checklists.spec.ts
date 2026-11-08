import { test, expect } from "@playwright/test";

test.describe("Checklists & Printable Guides", () => {
  test("renders hospital bag, fever protocol, and tracker in English", async ({
    page,
  }) => {
    await page.goto("en/checklists/");

    // Check main title
    await expect(page.locator("h1")).toContainText(
      "Parent Checklists & Printable Guides",
    );

    // Verify Hospital Bag Card
    const hospitalBag = page.locator("interactive-checklist");
    await expect(hospitalBag).toBeVisible();
    await expect(page.locator("h2").first()).toContainText(
      "Hospital Bag Checklist",
    );

    // Verify Checkboxes interactivity
    const firstCheckbox = hospitalBag.locator('input[type="checkbox"]').first();
    await expect(firstCheckbox).not.toBeChecked();
    await firstCheckbox.check();
    await expect(firstCheckbox).toBeChecked();

    // Verify Emergency Fever Protocol
    const feverProtocol = page.locator(
      "text=FEVER DURING TREATMENT IS A MEDICAL EMERGENCY",
    );
    await expect(feverProtocol).toBeVisible();

    // Verify Weekly Tracker
    const tracker = page.locator("table");
    await expect(tracker).toBeVisible();
    await expect(tracker).toContainText("Monday");
    await expect(tracker).toContainText("Morning Temp");
  });

  test("renders localized French and Chinese checklists", async ({ page }) => {
    // French
    await page.goto("fr/checklists/");
    await expect(page.locator("h1")).toContainText(
      "Aide-mémoire et guides imprimables",
    );
    await expect(
      page.locator(
        "text=LA FIÈVRE PENDANT LE TRAITEMENT EST UNE URGENCE MÉDICALE",
      ),
    ).toBeVisible();

    // Chinese
    await page.goto("zh/checklists/");
    await expect(page.locator("h1")).toContainText("家长清单与可打印指南");
    await expect(
      page.locator("text=治疗期间发热属于医疗紧急情况"),
    ).toBeVisible();
  });
});
