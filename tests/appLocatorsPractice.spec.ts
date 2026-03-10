import {test,expect,Locator} from "@playwright/test";

test("verify locators", async ({page})=>{

    await page.goto('http://127.0.0.1:5500/tests/app.html');
    await page.getByRole('button',{name:'Click Me'}).click();

    await expect(page.getByAltText('Company Logo')).toBeVisible();
    await expect(page.getByAltText('User Profile Picture')).toBeVisible();

    await page.getByTestId('submit-btn').click();
    await expect(page.getByTestId('user-email')).toHaveText('john@example.com');


});