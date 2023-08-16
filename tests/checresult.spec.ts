import {expect, test} from "@playwright/test"
import { PageBeforeSearch } from "./pages/PageBeforeSearch"
import { PageAfterSearch } from "./pages/PageAfterSearch"


test.describe.only("Проверка результатов поиска", () => {
    let pageBeforeSearch: PageBeforeSearch
    let pageAfterSearch: PageAfterSearch


    test.beforeEach(async ({page}) => {
        pageBeforeSearch = new PageBeforeSearch(page)
        await pageBeforeSearch.openPage()

    })

    test("Проверка результатов поиска с помощью ПО", async({page}) => {
        await pageBeforeSearch.find("RPA")
        pageAfterSearch = new PageAfterSearch(page)        
        const listOfRes = await pageAfterSearch.getListOfResult()        
        const matchingItem = listOfRes.filter(item=>item.includes("как создаются роботы"))        
        expect(matchingItem.length).toBeGreaterThan(0)       
    })

})





