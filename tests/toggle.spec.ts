import { test } from '@playwright/test';
import { accessUrl } from '../playwright/.auth/config.json'

test('toggle', async ({ page }) => {
  await page
    .goto(accessUrl);
  
  // accept any popup
  page.on('dialog', dialog => dialog.accept());
  
  // find buttons for allow/block
  const allow = page
    .getByRole('row', { name: 'Allowed  -- 192.168.0.24 74:f7:f6:3b:32:05 Wireless', exact: true })
    .getByRole('checkbox')
  const block = page
    .getByRole('row', { name: 'Blocked  -- 192.168.0.24 74:f7:f6:3b:32:05 Wireless', exact: true })
    .getByRole('checkbox')
  
  // decide whether to allow/block
  if (await allow.isVisible()) {
    // block
    await allow.check();
    await page
      .getByRole('button', { name: 'Block' })
      .click();
  } else {
    // allow
    await block.check();
    await page
      .getByRole('button', { name: 'Allow' })
      .click();
  }
});
