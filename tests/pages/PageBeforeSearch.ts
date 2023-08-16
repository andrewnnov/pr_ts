import { Locator, Page } from "@playwright/test";

export class PageBeforeSearch {
    readonly page: Page
    readonly searchField: Locator
    readonly searchButton: Locator

    constructor(page: Page) {
        this.page = page
        this.searchField = page.locator("//input[@name='search']")
        this.searchButton = page.locator("//div[@id='search-open']")
    }

    openPage = async () => {
        await this.page.goto("https://bellintegrator.ru/")
    }

    find = async (text: string) => {
        await this.searchButton.waitFor()
        await this.searchButton.click()
        await this.searchField.waitFor()
        await this.searchField.fill(text)
        await this.searchField.press("Enter")
        await this.page.waitForURL(/\/search/, { timeout: 3000 })    
        
    }

}