import test, { Page,expect } from "@playwright/test";

test("verify css locators",async({page})=>{
await page.goto('https://demowebshop.tricentis.com/')
await page.locator('input#small-searchterms').fill('laptop')

// const button = page.getByRole('button', { name: 'Search' })
// await expect(button).toBeVisible()
// await page.getByRole('button', { name: 'Search' }).click()

await page.locator('.search-box-text.ui-autocomplete-input').fill("t-shirts")

})
