describe('Testando habilidades com cypress', () => {
  it('visitando sites', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('Clicando em botões', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.contains('button', 'Subscribe').click()
  })

  it('escrevendo em campos', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('#signature-textarea').type('Cypress é top!')
  })

  it('clicando em checkboxes', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('input[type="checkbox"]').check()
  })

  it('clicando em botoes do tipo radio', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('input[type="radio"]').check()
  })

  it('selecionando de uma lista', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('#selection-type').select('Basic')
    cy.get('#fruit').select(['apple', 'cherry'])
  })

  it('adicionando arquivos', () => {
    const filepath = 'teste.txt';
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('input[type="file"]').attachFile(filepath);
  })

  it('usando intercept', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.contains('button', 'Get TODO').click()
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1').as('getTodo')
    cy.contains('button', 'Get TODO').click() // this would trigger the above request.
    cy.wait('@getTodo', { timeout: 10000 })
  })

  it('acessando apis', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1').its('status').should('be.equal', 200)

  })

  it('movendo barra de status com invoke e trigger', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('input[type="range"]').invoke('val', 5).trigger('change')
  })

  it('inputando datas', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('input[type="date"]').type('2024-01-16').blur()
  })
})