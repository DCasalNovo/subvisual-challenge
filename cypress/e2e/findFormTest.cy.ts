describe('Test find pokemon form', () => {
  it('Test name input', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="FindPokeForm-name"]')
      .should('exist')
      .focus()
      .should('be.visible')
      .type('pikachu')
      .should('have.value', 'pikachu')
  })

  it('Test id input', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="FindPokeForm-id"]')
      .should('exist')
      .focus()
      .should('be.visible')
      .type('pikachu')
      .should('have.value', '')
      .clear()
      .should('have.value', '')
      .type('123-123')
      .should('have.value', '1025')
      .clear()
      .type('-1')
      .should('have.value', '1')
      .clear()
      .type('wad-eqlç,5qrma~()e')
      .should('have.value', '5')
  })

  it('Test name filter', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="FindPokeForm-name"]')
      .should('exist')
      .focus()
      .type('pikachu')
      .should('have.value', 'pikachu')

    cy.get('[data-testid="PokeCard-name-pikachu"]')
      .should('exist')
      .should('be.visible')
  })

  it('Test name filter for parcial matches', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="FindPokeForm-name"]')
      .should('exist')
      .focus()
      .type('luc')
      .should('have.value', 'luc')

    cy.get('[data-testid="PokeCard-name-lucario"]')
      .should('exist')
      .should('be.visible')

    cy.get('[data-testid="PokeCard-name-hawlucha"]')
      .should('exist')
      .should('be.visible')
  })

  it('Test id filter', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="FindPokeForm-id"]')
      .should('exist')
      .focus()
      .type('500')
      .should('have.value', '500')

    cy.get(`[data-testid="PokeCard-id-499"]`).should('not.exist')

    cy.get(`[data-testid="PokeCard-id-561"]`).should('not.exist')

    for (let index = 500; index < 560; index++) {
      cy.get(`[data-testid="PokeCard-id-${index}"]`).should('exist')
    }
  })
})
