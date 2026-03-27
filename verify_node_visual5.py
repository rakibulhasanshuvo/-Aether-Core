from playwright.sync_api import sync_playwright

def test_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://localhost:3000')
        page.wait_for_load_state('networkidle')

        # Scroll down to ensure elements trigger their scroll animations
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(2000)

        # Scroll back up a little bit to see the footer and the node visual properly
        page.evaluate("window.scrollBy(0, -300)")
        page.wait_for_timeout(1000)

        # Take a full page screenshot
        page.screenshot(path='/home/jules/verification/screenshots/verification5.png', full_page=True)
        browser.close()

test_homepage()
