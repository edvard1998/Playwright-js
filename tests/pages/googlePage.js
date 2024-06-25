exports.GooglePage = 
class GooglePage {
    constructor(page) {
        this.page = page;
        this.searchField = "//textarea[@id='APjFqb']";
        this.keyboard = 'Enter';
        this.imageListLocator = "(//div[@class='QJ1ykf sDknIc'])[1]//img";
    }

    async gotoGooglePlage() {
        await this.page.goto('https://www.google.com/');
    }

    async fillSearchField(text) {
        await this.page.fill(this.searchField, text);
        await this.page.keyboard.press(this.keyboard);
    }

    async getImages() {
        await this.page.waitForSelector(this.imageListLocator);
        const imageList = await this.page.$$(this.imageListLocator);

        let index = 1;

        for (const image of imageList) {
            const imageItem = await image;
            await imageItem.screenshot({ path: 'tests/images/' + `Person${index++}.jpeg` });
        }
    }
}