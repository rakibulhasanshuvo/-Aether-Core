import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 2000})
        await page.goto('http://localhost:3000')
        await page.wait_for_timeout(2000)

        # Scroll bit by bit to trigger all animations
        for i in range(10):
            await page.evaluate(f'window.scrollTo(0, {i * 400})')
            await page.wait_for_timeout(300)

        await page.evaluate('window.scrollTo(0, 0)')
        await page.wait_for_timeout(1000)

        await page.screenshot(path='/home/jules/verification/screenshots/full_page.png', full_page=True)
        await browser.close()

asyncio.run(main())
