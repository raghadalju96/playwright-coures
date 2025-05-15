import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('Login test nagative case', (async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.fill('#user_login', 'invalid_username')
    await page.fill('#user_password', 'invalid_password')
    await page.cliclk('input[type="submit"]')

    const errorMsg = await page.locator('.alert-error')

    await expect(errorMsg).toContainText('Login and/or password are wrong.')

}))