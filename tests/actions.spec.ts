import {test,expect, Locator} from "@playwright/test"

test("textbox test",async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const textbox: Locator = page.locator('#name')
    expect(textbox).toBeVisible
    expect(textbox).toBeEnabled
    const maxlength = await textbox.getAttribute("maxLength")
    expect(maxlength).toBe('15')
    console.log(maxlength)
    await textbox.fill("Jane Doe")
    const inputValue: String = await textbox.inputValue()
    console.log(inputValue)
    expect(inputValue).toBe("Jane Doe")
    await page.waitForTimeout(2000)
    await page.close()
})

test("Radio button", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const maleRadioButton:Locator = page.locator('#male')
    await expect(maleRadioButton).toBeVisible()
    await expect(maleRadioButton).toBeEnabled()

    expect(await maleRadioButton.isChecked()).toBe(false)
    await maleRadioButton.check()
    await expect(maleRadioButton).toBeChecked()

});

test.only("checkbox test", async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/")
  const sunday_checkbox = page.getByLabel ('Sunday')
//   await sunday_checkbox.check()
//   await expect(sunday_checkbox).toBeChecked()

  const allDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//   for (const day of allDays){
//     const day_checkbox = page.getByLabel (day)
//     await day_checkbox.check()
//     await expect(day_checkbox).toBeChecked()
//     console.log(day," is checked")
//   }

  const checkBoxes:Locator[] = allDays.map(index => page.getByLabel(index))
  const newcheckBoxes = checkBoxes.slice(-3)
  expect(checkBoxes.length).toBe(7)
  for (const checkbox of checkBoxes){
    await checkbox.check()
    await expect(checkbox).toBeChecked()
  }
  for (const toUncheck of newcheckBoxes){
     await toUncheck.uncheck();
     await expect(toUncheck).not.toBeChecked()

  }

  //check if unchecked and uncheck if checked
  for(const checkbox of checkBoxes){
    if(await checkbox.isChecked()){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked()
    }
    else {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }
    await page.waitForTimeout(3000)
  }




})
   

