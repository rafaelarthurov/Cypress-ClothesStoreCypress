describe('Search elements', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    //Test Case 1
    it('TC1 - Search elements with multiple results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress')
            cy.get(index.searchButton).click()
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress')
        })
    })

    //Test Case 2
    it('TC2 - Seach for elements with no results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty')
            cy.get(index.searchButton).click()
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results were found for your search')
        })
    })

})