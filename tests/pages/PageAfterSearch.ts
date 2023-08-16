import { Locator, Page } from "@playwright/test";

export class PageAfterSearch {
    readonly page: Page
    readonly listOfResult: Locator

    constructor(page) {
        this.page = page
        this.listOfResult = page.locator("//li//div[@class='search-result__snippet-info']")
    }

    getListOfResult = async() => {        
        //await this.listOfResult.waitFor()
        await this.page.pause()
        return this.listOfResult.allInnerTexts()
        
    }

}