import {test, expect, Locator} from "@playwright/test";

//locator identifies element on the page
//DOM - document Object Model->Api interface provided by the browser

test("Using locators",async ({page})=>{
await page.goto(`https://demo.nopcommerce.com/register?returnUrl=%2F`);//returning promise or doing some action on element

// //locating images
// const logo:Locator = page.getByAltText("nopCommerce demo store"); 
// await expect(logo).toBeVisible();

// //for non-interactive elements
// await expect(page.getByText("Welcome to our store")).toBeVisible(); 
// //regular exp
// await expect(page.getByText(/Welcome\s+to\s+our\s+store/i)).toBeVisible(); 

// //locate by explicit and implicit accessibility attributes
// await page.getByRole('link',{name: 'Register'}).click();
// await expect(page.getByRole('heading',{name: 'Register'})).toBeVisible();

await page.getByLabel('First name:').fill("Fname");
await page.getByLabel('Last name:').fill("Lname");
await page.getByLabel('Email:').fill('fname.Lname@test.com');

await page.getByPlaceholder('Search store').fill('phone');


});