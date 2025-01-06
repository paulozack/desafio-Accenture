import '../support/tools'

export const API_BASE_URL = "https://demoqa.com"

let result = ""
let password = ""
let userData = {
    userName: result,
    password: password,
}

export default class ApiPage {

    static accessApiURL(url = API_BASE_URL){
        cy.request({
            method: "GET",
            url: url,
        
        }).then((response) => {
            expect(response.status).to.eq(200)
        
        })

    }


    static createUserAPI(username = '', password = 'Joao@123', returnCode = 201) {
        let userPath = "/Account/v1/User"
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        cy.log("return code: " + returnCode)
        
        let length = 10
        for (let i = 0; i < length; i++) {//cria uma sequencia de string alfanumerica aleatoriamente para o username
            if (returnCode != 201){
                break
            }
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }

        cy.log("result " + result)
        userData.userName = result
        userData.password = password
    
        return cy.request({
            method: "POST",
            url: API_BASE_URL + userPath,
            body: userData, 
            headers: {
                "Content-Type": "application/json",
            },
            failOnStatusCode: false
        }).then((response) => {
                expect(response.status).to.eq(returnCode)
                return response.body
        
            })
    }


    static generateToken(userDataParam, returnCode = 200) {
        const tokenPath = "/Account/v1/GenerateToken";
        userDataParam = userData
        cy.log("Gerando token para o usuário: " + JSON.stringify(userDataParam))

        return cy.request({
            method: "POST",
            url: API_BASE_URL + tokenPath,
            body: userDataParam, 
            headers: {
                "Content-Type": "application/json",
            },
            failOnStatusCode: false, 
        }).then((response) => {
            expect(response.status).to.eq(returnCode)
            const token = response.body.token
            return token
    
        })
    }


    static checkUserAuth(userDataParam, returnCode = 200){

        const authPath = "/Account/v1/Authorized"

        userDataParam = userData

        return cy.request({
            method: "POST",
            url: API_BASE_URL + authPath,
            body: userDataParam, 
            headers: {
                "Content-Type": "application/json",
            },
            failOnStatusCode: false, 
        }).then((response) => {
            expect(response.status).to.eq(returnCode)
            cy.log(`Status Code: ${response.status}`)
    
        })
    }


    static listBooks(returnCode = 200) {
        const booksPath = "/BookStore/v1/Books"
    
        return cy.request({
            method: "GET",
            url: API_BASE_URL + booksPath,
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            expect(response.status).to.eq(returnCode)
            return response.body

        })
    }
    
    
    static rentBooks(userId, token, books, returnCode = 201) {
        const booksPath = "/BookStore/v1/Books"
        
        cy.log('userID ' + userId)
        cy.log('token ' + token)
        cy.log('books ' + books)

        const requestBody = {
            userId: userId,
            collectionOfIsbns: books.map((book) => ({
                isbn: book.isbn,
            })),
        }
    
        return cy.request({
            method: "POST",
            url: API_BASE_URL + booksPath,
            body: requestBody,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            failOnStatusCode: false,
        }).then((response) => {   
            expect(response.status).to.eq(returnCode)
            return response.body

        })
    }
    
    
    static getUserDetails(userId, token, returnCode = 200) {
        const userDetailsPath = `/Account/v1/User/${userId}`
    
        return cy.request({
            method: "GET",
            url: API_BASE_URL + userDetailsPath,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            failOnStatusCode: false, 
        }).then((response) => {
            expect(response.status).to.eq(returnCode)
            return response.body
        });
    }
    



}
    


            
        
   

