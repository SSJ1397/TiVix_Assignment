import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps"

// User Should be search a car in a Specific Country/city


Given('User visit tivixlabs Site', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/')
})
And('User click for select country and city from the dropdown', () => {
    cy.get('#country').select('France').should('have.value', "3")
    cy.get('#city').select('Paris').should('have.value', "4")

})

And('User type model name in the model', () => {
    cy.get('#model').type('Toyota Aygo')

})
And('User click for select pick-up and drop-of date', () => {
    cy.get('#pickup').type('2022-07-01')
    cy.get('#dropoff').type('2022-08-31')

})

When('User click on search button', () => {
    cy.get('.btn-primary').click()
})

Then('User click for validate the url', () => {
    cy.url().should('contain', 'country')
})

// User is unable to search cars with invalid data entry

And('User click for select country and city from the dropdown', () => {
    cy.get('#country').select('France').should('have.value', "3")
    cy.get('#city').select('Paris').should('have.value', "4")

})

And('User type model name in the model', () => {
    cy.get('#model').type('Toyota Aygo')

})
And('User click for select incorrect pick-up and drop-of date', () => {
    cy.get('#pickup').type('2022-08-01')
    cy.get('#dropoff').type('2022-07-01')


})

When('User click on search button', () => {
    cy.get('.btn-primary').click()
})

Then('User click for validate the text', () => {
    cy.get('.alert-danger').should('contain', 'Please enter a valid date!')

})

// User is able to fill a rent form

And('User click for select country and city from the dropdown', () => {
    cy.get('#country').select('France').should('have.value', "3")
    cy.get('#city').select('Paris').should('have.value', "4")

})

And('User type model name in the model', () => {
    cy.get('#model').type('Toyota Aygo')

})
And('User click for select pick-up and drop-of date', () => {
    cy.get('#pickup').type('2022-07-01')
    cy.get('#dropoff').type('2022-08-31')

})

When('User click on search button', () => {
    cy.get('.btn-primary').click()
})

And('User click on selected model rent button', () => {
    cy.get('.btn-success').eq(9).click()
})

Then('User click on selected car rent button to fill the personal data', () => {
    cy.get('.btn-primary').click()
})

Then('User fill the personal data', function () {
    cy.get('#name').type('Snehal')
    cy.get('#last_name').type('Jadhav')
    cy.get('#card_number').type('44 22 33 256')
    cy.get('#email').type('jadhavs1397@gmail.com')
})