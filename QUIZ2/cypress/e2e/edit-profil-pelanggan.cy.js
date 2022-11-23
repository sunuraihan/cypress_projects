describe('Halaman Edit Profil dengan sesi', () => {
  it('passes', () => {
    cy.visit('http://localhost/RestoUAS/pelanggan.php?id=26&edit=1')
  })
})


describe('Case 1 : Data username, password dan nama lengkap', () => {
  it('passes', () => {
    cy.get('#username').click()
    cy.get('#username').clear({force: true})
    cy.get('#username').type('sunuraihan11', {force: true})
    cy.wait(1000)
    cy.get('#password').click()
    cy.get('#password').clear({force: true})
    cy.get('#password').type('12345678', {force: true})
    cy.wait(1000)
    cy.get('#nama_user').click()
    cy.get('#nama_user').clear({force: true})
    cy.get('#nama_user').type('R. Sunu Raihan', {force: true})
    cy.wait(1000)
    cy.get('#edit_user > .container > .php-email-form > .text-center > button').click()
    cy.wait(3000)
  })
})

describe('Case 2 : Data nama dikosongkan', () => {
  it('passes', () => {
    cy.get('#username').click()
    cy.get('#username').clear({force: true})
    cy.get('#username').type('sunuraihan11', {force: true})
    cy.wait(1000)
    cy.get('#password').click()
    cy.get('#password').clear({force: true})
    cy.get('#password').type('12345678', {force: true})
    cy.wait(1000)
    cy.get('#nama_user').click()
    cy.get('#nama_user').clear({force: true})
    cy.wait(1000)
    cy.get('#edit_user > .container > .php-email-form > .text-center > button').click()
    cy.wait(3000)
  })
})

describe('Case 3 : Data Password dikosongkan', () => {
  it('passes', () => {
    cy.get('#username').click()
    cy.get('#username').clear({force: true})
    cy.get('#username').type('sunuraihan11', {force: true})
    cy.wait(1000)
    cy.get('#password').click()
    cy.get('#password').clear({force: true})
    cy.wait(1000)
    cy.get('#nama_user').click()
    cy.get('#nama_user').clear({force: true})
    cy.get('#nama_user').type('R. Sunu Raihan', {force: true})
    cy.wait(1000)
    cy.get('#edit_user > .container > .php-email-form > .text-center > button').click()
    cy.wait(3000)
  })
})

describe('Case 4 : Data username dikosongkan', () => {
  it('passes', () => {
    cy.get('#username').click()
    cy.get('#username').clear({force: true})
    cy.wait(1000)
    cy.get('#password').click()
    cy.get('#password').clear({force: true})
    cy.get('#password').type('12345678', {force: true})
    cy.wait(1000)
    cy.get('#nama_user').click()
    cy.get('#nama_user').clear({force: true})
    cy.get('#nama_user').type('R. Sunu Raihan', {force: true})
    cy.wait(1000)
    cy.get('#edit_user > .container > .php-email-form > .text-center > button').click()
    cy.wait(3000)
  })
})

describe('Case 5 : Data dikosongkan', () => {
  it('passes', () => {
    cy.get('#username').click()
    cy.get('#username').clear({force: true})
    cy.wait(1000)
    cy.get('#password').click()
    cy.get('#password').clear({force: true})
    cy.wait(1000)
    cy.get('#nama_user').click()
    cy.get('#nama_user').clear({force: true})
    cy.wait(1000)
    cy.get('#edit_user > .container > .php-email-form > .text-center > button').click()
    cy.wait(3000)
  })
})
