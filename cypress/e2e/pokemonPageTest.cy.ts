describe('Test pokemon page', () => {
  it('Test redirect when clicking on pokemon card', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="FindPokeForm-name"]')
      .should('exist')
      .focus()
      .type('luc')
      .should('have.value', 'luc')

    cy.get('[data-testid="PokeCard-name-lucario"]')
      .should('exist')
      .click()
      .url()
      .should('include', '/pokemon/lucario')
  })

  it('Test prev button', () => {
    cy.visit('http://localhost:5173/pokemon/dewott')

    cy.get('[data-testid="PokeInfo-name"]')
      .should('exist')
      .should('have.text', 'Dewott')

    cy.get('[data-testid="PokeInfo-id"]')
      .should('exist')
      .should('have.text', '(id: 502)')

    cy.get('[data-testid="PokeInfo-prev"]')
      .should('exist')
      .click()
      .url()
      .should('include', '/pokemon/oshawott')

    cy.get('[data-testid="PokeInfo-name"]')
      .should('exist')
      .should('have.text', 'Oshawott')

    cy.get('[data-testid="PokeInfo-id"]')
      .should('exist')
      .should('have.text', '(id: 501)')
  })

  it('Test next button', () => {
    cy.visit('http://localhost:5173/pokemon/dewott')

    cy.get('[data-testid="PokeInfo-name"]')
      .should('exist')
      .should('have.text', 'Dewott')

    cy.get('[data-testid="PokeInfo-id"]')
      .should('exist')
      .should('have.text', '(id: 502)')

    cy.get('[data-testid="PokeInfo-next"]')
      .should('exist')
      .click()
      .url()
      .should('include', '/pokemon/samurott')

    cy.get('[data-testid="PokeInfo-name"]')
      .should('exist')
      .should('have.text', 'Samurott')

    cy.get('[data-testid="PokeInfo-id"]')
      .should('exist')
      .should('have.text', '(id: 503)')
  })

  it('Test flip image', () => {
    cy.visit('http://localhost:5173/pokemon/dewott')

    cy.get('[data-testid="InfoCard-front-default-image"]')
      .should('exist')
      .should(($img) => {
        expect($img.attr('src')).to.match(/\/pokemon\/\d+.png/)
      })
      .click()
      .wait(4000)
      .should(($img) => {
        expect($img.attr('src')).to.match(/\/pokemon\/back\/\d+.png/)
      })
      .click()
  })
})
