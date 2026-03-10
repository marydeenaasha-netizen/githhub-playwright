import {test, expect, Locator} from "@playwright/test";

test("google page",async({page})=>{
await page.goto(`https://www.google.com`);
await page.getByRole("combobox").fill("hello");
await page.getByRole("combobox").press('Enter');
await page.getByRole('heading', { name: /Hello \(Adele song\)/i }).isVisible();

});




