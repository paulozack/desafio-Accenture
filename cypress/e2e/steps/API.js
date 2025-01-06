import { Given, Then, When, And, But} from "@badeball/cypress-cucumber-preprocessor"
import ApiPage from "cypress/page_objects/apiPage";

Given("acessa a API", () => {
  ApiPage.accessApiURL()
})


When("cria usuario e senha via API retornando codigo {int}", (code) => {
  ApiPage.createUserAPI("", "Joao@123", code)

})


Then("mesmo usuario nao pode ser criado via API retornando codigo {int}", (errorCode) => {
  ApiPage.createUserAPI("", "Joao@123", errorCode)

})


Then('gera o token de acesso', () => {
  ApiPage.generateToken()

})


Then('confirma se o usuario esta autorizado', () => {
  ApiPage.checkUserAuth()

})


When('usuario acessa via API', () => {
  ApiPage.createUserAPI("", "Joao@123", 201).then((userResponse) => {
    cy.log("User Response: " + JSON.stringify(userResponse)); // Loga toda a resposta
    cy.wrap(userResponse).as("userResponse") 

  })
  
  ApiPage.generateToken().then((token) => {
    cy.log("Token armazenado: " + token);
    cy.wrap(token).as("token")

  })

  ApiPage.checkUserAuth()

})


Then("exibe lista de livros", () => {
  return ApiPage.listBooks().then((booksResponse) => {

      expect(booksResponse.books).to.have.length.greaterThan(0)
      booksResponse.books.forEach((book) => {
          expect(book).to.have.property("isbn").that.is.a("string")
          expect(book).to.have.property("title").that.is.a("string")
          expect(book).to.have.property("author").that.is.a("string")
     
        })
        
        return cy.wrap(booksResponse).as("booksResponse")
      })
})


Then("usuario aluga livro", () => {
  cy.get("@userResponse").then((userResponse) => {
    const userId = userResponse.userID;
  
    cy.get("@token").then((token) => {
      const userToken = token;
  
      cy.get("@booksResponse").then((booksResponse) => {
        const books = booksResponse.books.slice(0, 2)
        ApiPage.rentBooks(userId, userToken, books).then((reserveResponse) => {
          cy.log(`Livros Reservados: ${JSON.stringify(reserveResponse)}`)
        })

      })
   
    })

  })
  
})


Then("exibe lista de livros reservados", () => {
    cy.get("@userResponse").then((userResponse) => {
      const userId = userResponse.userID

      cy.get("@token").then((token) => {
          ApiPage.getUserDetails(userId, token).then((userDetails) => {
              cy.wrap(userDetails).as("userDetails") 

          })

      })
  })

})


Then("os livros reservados aparecendo nos detalhes do usuario", () => {
  cy.get("@booksResponse").then((booksResponse) => {
      const reservedBooks = booksResponse.books.slice(0, 2)
      cy.get("@userDetails").then((userDetails) => {
          expect(userDetails.books).to.have.length(reservedBooks.length)

          reservedBooks.forEach((book, index) => {
              expect(userDetails.books[index].isbn).to.eq(book.isbn)
              expect(userDetails.books[index].title).to.eq(book.title)
          })
      })
      
  })

})