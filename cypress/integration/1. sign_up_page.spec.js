import { frontUrl } from '../fixtures/fixturesData'

describe('Sign up Page', () => {

  it('Go to main page', () => {
    cy
      .logout()
    cy
      .login()
    cy
      .visit(frontUrl + '/')
    cy
      .url()
      .should('include', '/')
  })

})
