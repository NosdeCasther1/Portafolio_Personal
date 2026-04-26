import { test, expect } from "@playwright/test";

test.describe("Main Navigation", () => {
  test("should navigate to projects page from home", async ({ page }) => {
    // Start from the index page
    await page.goto("/");

    // Verify the title contains 'Portafolio'
    await expect(page).toHaveTitle(/Portafolio/i);

    // Find and click the 'Proyectos' link
    const projectsLink = page.getByRole("link", { name: /Proyectos/i });
    await projectsLink.click();

    // Verify we are on the projects page
    await expect(page).toHaveURL(/\/proyectos/);
    
    // Optional: check for a heading on the projects page
    // await expect(page.getByRole('heading', { level: 1 })).toContainText('Mis Proyectos');
  });
});
