import {test, expect} from "@playwright/test";

//fixtures: global variable, page, browser, browsercontext
//page-subset of browser

 test("open browser/Verify page title", async ({page})=>{

 await page.goto(`https://www.automationpractice.pl/index.php`);
 let pageTitle:string = await page.title();
 console.log("title of the page is: ",pageTitle);
 await expect(page).toHaveTitle('My Shop');

});
