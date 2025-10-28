import { expect, test } from '@playwright/test'

const icon = './assets/icon-x.svg'
const path = '/iframe.html?globals=&args=&id=components-button--icon-button'

test.beforeEach(async ({ page }) => {
  await page.goto(path)
})

test('компонент соответствует снэпшоту', async ({ page }) => {
  const root = page.locator('#storybook-root button')

  const innerHTML = (await root.innerHTML());

  expect(innerHTML).toMatchSnapshot()
})

test('secondary соответствует снэпшоту', async ({ page }) => {
  const root = page.locator('#storybook-root button-snapshot')

  const innerHTML = (await root.innerHTML());

  expect(innerHTML).toMatchSnapshot()
})

test('secondary соответствует снэпшоту', async ({ page }) => {
  const root = page.locator('#storybook-root button-snapshot')

  const innerHTML = (await root.innerHTML());

  expect(innerHTML).toMatchSnapshot()
})


test('компонент соответствует скриншоту', async ({ page }) => {
  const root = page.locator('#storybook-root button')

  await expect(root).toHaveScreenshot()
});

test('icon соответствует скриншоту', async ({ page }) => {
  const root = page.locator('#storybook-root icon')

  await expect(root).toHaveScreenshot()
});

test('icon соответствует снэпшоту', async ({ page }) => {
  const root = page.locator('#storybook-root icon')

  const innerHTML = (await root.innerHTML());

  expect(innerHTML).toMatchSnapshot()
})

test('link соответствует скриншоту', async ({ page }) => {
  const root = page.locator('#storybook-root button--link')

  await expect(root).toHaveScreenshot()
});

test('link соответствует скриншоту', async ({ page }) => {
  const root = page.locator('#storybook-root button--link')

  await expect(root).toHaveScreenshot()
});






// import { expect, test } from '@playwright/test'

// const BASE = '/iframe.html?id=components-button--'

// const STORIES = {
//   primary: 'primary--button',
//   secondary: 'secondary--button',
//   icon: 'icon--button',
//   link: 'link--button',
// } as const

// type Variant = keyof typeof STORIES

// const testVariant = (variant: Variant) => {
//   const url = `${BASE}${STORIES[variant]}`

//   test.describe(`Button — ${variant}`, () => {
//     test.beforeEach(async ({ page }) => {
//       await page.goto(url)
//     })

//     test('снэпшот HTML', async ({ page }) => {
//       const button = page.locator('#storybook-root button[is="button-component"]')
//       const html = await button.innerHTML()
//       expect(html).toMatchSnapshot(`${variant}-snapshot.txt`)
//     })

//     test('скриншот', async ({ page }) => {
//       const button = page.locator('#storybook-root button[is="button-component"]')
//       await expect(button).toHaveScreenshot(`${variant}-screenshot.png`, {
//         animations: 'disabled',
//       })
//     })
//   })
// }
// testVariant('primary')
// testVariant('secondary')
// testVariant('icon')
// testVariant('link')