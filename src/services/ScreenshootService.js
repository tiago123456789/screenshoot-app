const puppeteer = require('puppeteer');
const { v4 } = require("uuid");

module.exports = {

    async getByDomain(domain) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(domain);
        const id = v4();
        const filename = `./public/prints/${id}.png`;
        await page.screenshot({ path: filename });
        await browser.close();
        return {
            filename: `${process.env.URL_APP}${id}.png`,
            domain: domain
        };
    }
}