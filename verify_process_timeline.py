from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(1000)

    # Scroll down to the Process Timeline section
    # The stats and quick nodes take up space, so we scroll down significantly.
    page.evaluate("window.scrollBy(0, 1500)")
    page.wait_for_timeout(1000)

    page.evaluate("window.scrollBy(0, 1000)")
    page.wait_for_timeout(1000)

    # Take screenshot of the new ProcessTimeline component
    page.screenshot(path="/home/jules/verification/screenshots/process_timeline.png", full_page=True)
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={'width': 1280, 'height': 800}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
