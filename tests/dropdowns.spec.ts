import {test, expect, Locator} from "@playwright/test"

test("dropdown test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const countryDropdown = page.getByRole('combobox', { name: 'Country:' });
    await countryDropdown.selectOption("United States")
    // await countryDropdown.selectOption({value:"usa"})
    // await countryDropdown.selectOption({label:"France"})
    // await countryDropdown.selectOption({index:6})
    const dropdownOptions = page.locator('#country>option')
    await expect(dropdownOptions).toHaveCount(10) 
   

    //check an option present in dropdown
    const optionsText = (await dropdownOptions.allTextContents()).map(text=>text.trim())
    console.log(optionsText)
    expect(optionsText).toContain('Japan')
     console.log("Japan is present")

     for (const option of optionsText){
        console.log(option)
     }

})