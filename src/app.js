const puppeteer = require('puppeteer');

try {
    !(async () => {
        const b = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await b.newPage();
        await page.goto('https://www.google.com/?hl=ja');
        const alt = await page.evaluate(() => document.querySelector('#hplogo').getAttribute('alt'));
        await b.close();
    })();
} catch (e) {
    console.error(e);
}