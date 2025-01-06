import { Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"
import FrontEndPage from "cypress/page_objects/frontEndPage"

Given("usuario acessa a url {string}", (url) => {
  FrontEndPage.accessURL(url)

})



When("escolhe a opcao Forms na pagina inicial", () => {
  FrontEndPage.clickOn("Forms")

})


Then("clica no submenu Practice Form", () => {
  FrontEndPage.clickOnLeftPanel("Practice Form")
  FrontEndPage.checkPracticeFormsTxtIsVisible()
  
})



Then("preencher todo o formulario com valores aleatorios", () => {
  FrontEndPage.submitForm()

})


Then('faz upload de arquivo {string}', (txtFile) => {
  FrontEndPage.completePicture()

})


Then('submete formulario', () => {
  FrontEndPage.clickOnSubmitBtn()
})


Then('garante que um popup foi aberto apos o submit', () => {
  FrontEndPage.checkOpennedPopUp()

})


Then("fecha o popup", () => {
  FrontEndPage.closePopUp()
})


When("escolhe a opcao Alerts, Frame & Windows na pagina inicial", () => {
  FrontEndPage.clickOn("Alerts, Frame & Windows")

})


Then("clica no submenu Browser Windows", () => {
  FrontEndPage.clickOnLeftPanel("Browser Windows")
  FrontEndPage.checkBrowserWindowsTxtIsVisible()
  
})

Then("clica no botao New Window", () => {
  cy.log('Clicaremos no proximo passo porque usaremos o cy.request para pegar uma nova janela')
})


Then("verifica se uma nova janela foi aberta com a mensagem This is a sample page", () => {
  FrontEndPage.clickOnNewWindowBtn()
})


Then("fecha nova janela aberta", () => {
  FrontEndPage.clickCloseNewWindow()
})



When("escolhe a opcao Elements na pagina inicial", () => {
  FrontEndPage.clickOn("Elements")

})


Then("clica no submenu Web Tables", () => {
  FrontEndPage.clickOnLeftPanel("Web Tables")
  FrontEndPage.checkBrowserWebTables()
  
})



Then("cria um novo registro de {string} {string} {string} {int} {int} {string}", (nome, sobrenome, email, idade, salario, depto) => {
  FrontEndPage.clickOnAddBtn()
  FrontEndPage.createNewRecord(nome, sobrenome, email, idade, salario, depto)

})


Then("editar novo regristo de {string} {string} {string} {int} {int} {string}", (nome, sobrenome, email, idade, salario, depto) => {
  FrontEndPage.editRecord()

})


Then("deleta o registro criado de {string} {string} {string} {int} {int} {string}", (nome, sobrenome, email, idade, salario, depto) => {
  FrontEndPage.deleteRecord()

})


When("escolhe a opcao Widgets na pagina inicial", () => {
  FrontEndPage.clickOn("Widgets")

})


Then("clica no submenu Progress Bar", () => {
  FrontEndPage.clickOnLeftPanel("Progress Bar")
  FrontEndPage.checkBrowserProgressBar()
  
})


Then("clica no botao Start", () => {
  FrontEndPage.clickOnStartBtn()
  cy.wait(500)
  FrontEndPage.clickOnStartBtn()

})


Then("para antes dos {int} por cento", (percent) => {
  FrontEndPage.checkProgressBarLessThan(percent)

})



Then("clica no botao Reset", () => {
  FrontEndPage.clickOnStartBtn()
  FrontEndPage.clickOnResetBtn()

})


When("escolhe a opcao Interactions na pagina inicial", () => {
  FrontEndPage.clickOn("Interactions")

})


Then("clica no submenu Sortable", () => {
  FrontEndPage.clickOnLeftPanel("Sortable")
  FrontEndPage.checkBrowserSortable()
  
})


Then("coloca os elementos em ordem crescente", () => {
  FrontEndPage.ordanate()
  
})