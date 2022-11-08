describe('Search elements', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    //Test Case 1
    it('TC1 - Search elements with multiple results', ()=>{
        cy.search('dress')
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress')
        })
    })

    //Test Case 2
    it('TC2 - Seach for elements with no results', ()=>{
        cy.search('qwerty')
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results were found for your search')
        })
    })

})