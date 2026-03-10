import {test, expect} from "@playwright/test";


test("verify button", async ({page})=>{
    await page.goto("http://uitestingplayground.com/disabledinput");
    const textbox = page.getByPlaceholder("Change me...")
    //click on the button
    const button =  page.locator('#enableButton')
    await button.click()
    const opstatus = page.locator('#opstatus');
    await expect(opstatus).toHaveText('Input Disabled...')
    //wait for 5 seconds
    await page.waitForTimeout(5000);
    await expect(opstatus).toHaveText('Input Enabled...')
    await textbox.fill("testing")
    await expect(textbox).toHaveValue('testing')

});


