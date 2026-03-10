import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1770671150762&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).fill('hello');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dhello%26sca_esv%3Db107c695a0b4cb1b%26source%3Dhp%26ei%3DLUyKaeCrPP7PkPIPsYm2-Ao%26iflsig%3DAFdpzrgAAAAAaYpaPuQVux8gNoZuTQPWo3wgcK776sdl%26ved%3D0ahUKEwig9qKHqM2SAxX-J0QIHbGEDa8Q4dUDCCg%26uact%3D5%26oq%3Dhello%26gs_lp%3DEgdnd3Mtd2l6IgVoZWxsbzIIEC4YgAQYsQMyCBAuGIAEGLEDMhEQLhiABBixAxjHARiOBRivATIOEC4YgAQYsQMY0QMYxwEyERAuGIAEGLEDGNEDGIMBGMcBMggQABiABBixAzIFEAAYgAQyCBAuGIAEGLEDMggQLhiABBixAzIIEAAYgAQYsQNI9C9QAFioKXAKeACQAQCYAWygAe0EqgEDNi4xuAEDyAEA-AEBmAIRoAKpBagCCsICDhAAGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwHCAgsQLhiABBjRAxjHAcICCxAuGIAEGLEDGIMBwgIUEC4YgAQYsQMY0QMYgwEYxwEYigXCAg4QLhiABBjHARiOBRivAcICEBAuGIAEGLEDGIMBGIoFGArCAgUQLhiABMICBBAAGAPCAgoQABgDGOoCGI8BwgIQEC4Y0QMYAxjHARjqAhiPAcICDhAuGIAEGLEDGIMBGIoFmAMC8QWC_z1infAlL5IHBDE2LjGgB_d0sgcDNi4xuAeIBcIHBjAuMTMuNMgHLIAIAA%26sclient%3Dgws-wiz%26sei%3DNkyKaaWcOMLkosUPtL-tiQE&q=EgQmVJxAGLeYqcwGIjCt92DpEEfIpek2LbkhwVh6Rew2oPCgBdYJ5Ae-zcrMXnnJ7Md-B1GAUmlP2mvIPd4yAVJaAUM');
  await page.locator('iframe[name="a-23jidpen2wnk"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-23jidpen2wnk"]').contentFrame().locator('.rc-canonical-bridge').click();
  await page.locator('iframe[name="c-23jidpen2wnk"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
});