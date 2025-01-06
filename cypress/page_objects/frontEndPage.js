import "@4tw/cypress-drag-drop"


import { HTML_H_TAG, CATEGORY_CARDS_CLASS, LEFT_PANEL_CLASS, TEXT_CENTER_CLASS, GENDER_RADIO_ID, HOBBIE_CHECKBOX_ID,
    CURRENTADDRESS_ID } from '../support/tools'

export const BASE_URL = "https://demoqa.com/"
export const fileTestPath = 'cypress/files/test.txt'


export default class FrontEndPage {

    static accessURL(url = BASE_URL){
        cy.visit(url, { waitForAnimations: true, timeout: 120000, onBeforeLoad(win) {
            
          }})
          
    }


    static clickOn(elementText){
        cy.get(CATEGORY_CARDS_CLASS) 
        .contains(HTML_H_TAG[4], elementText).should('be.visible').click({force: true, timeout: 5000}) 

    }


    static clickOnLeftPanel(elementText){
        cy.get(LEFT_PANEL_CLASS, { timeout: 10000 }).contains('.btn', elementText)
            .should('be.visible').click({force: true, timeout: 5000})

    }

    static checkPracticeFormsTxtIsVisible(){
        let practiceFormTxt = 'Practice Form'
        cy.get(TEXT_CENTER_CLASS, {timeout: 20000}).contains(HTML_H_TAG[0], practiceFormTxt, {timeout: 20000})
            .should('be.visible', {timeout: 20000}).then(() => {
                
            })
            
    }


    static checkBrowserWindowsTxtIsVisible(){
        let browserWindowsTxt = 'Browser Windows'
        cy.get(TEXT_CENTER_CLASS, {timeout: 20000}).contains(HTML_H_TAG[0], browserWindowsTxt, {timeout: 20000})
            .should('be.visible', {timeout: 20000}).then(() => {
                
            })
            
    }


    static checkBrowserWebTables(){
        let browserWindowsTxt = 'Web Tables'
        cy.get(TEXT_CENTER_CLASS, {timeout: 20000}).contains(HTML_H_TAG[0], browserWindowsTxt, {timeout: 20000})
            .should('be.visible', {timeout: 20000}).then(() => {
                
            })
            
    }

    
    static checkBrowserProgressBar(){
        let progressBarTxt = 'Progress Bar'
        cy.get(TEXT_CENTER_CLASS, {timeout: 20000}).contains(HTML_H_TAG[0], progressBarTxt, {timeout: 20000})
            .should('be.visible', {timeout: 20000}).then(() => {
                
            })
    }


    static checkBrowserSortable(){
        let progressBarTxt = 'Sortable'
        cy.get(TEXT_CENTER_CLASS, {timeout: 20000}).contains(HTML_H_TAG[0], progressBarTxt, {timeout: 20000})
            .should('be.visible', {timeout: 20000}).then(() => {
                
            })
    }


    static checkProgressBarLessThan(percentParam = 25){
        const PROGRESSBAR_ID_CLASS = '#progressBar .progress-bar'

        cy.get(PROGRESSBAR_ID_CLASS, { timeout: 5000 })
            .should(($bar) => {
            const value = Number($bar.attr("aria-valuenow"));
            
            expect(value, "progress bar").to.be.greaterThan(0)
            expect(value, "progress bar").to.be.lessThan(percentParam)

        })

    }


    static clickOnResetBtn(){
        const RESETBTN_ID = '#resetButton'
        cy.get(RESETBTN_ID, { timeout: 30000 }).should('be.visible').click()

    }


    static clickOnStartBtn(){
        const STARTBTN_ID = '#startStopButton'
        cy.get(STARTBTN_ID, {timeout: 15000}).should('be.visible').click()

    }

    static clickOnAddBtn(){
        const ADDBTN_iD  ='#addNewRecordButton'
        cy.get(ADDBTN_iD, {timeout: 15000}).click().then(() => {
            let REG_ID = '#registration-form-modal'
            cy.get(REG_ID, {timeout: 150000}).contains('Registration Form').should('exist')
            //cy.get(REG_ID, {timeout: 150000}).contains('Registration Form').should('be.visible')

        })
    }
    

    static createNewRecord(name = 'Jose', lastName = "Oliveira", email = 'joseoli@test.com', age = 20, salary = 1000, crew = 'HR') {
        const NAME_ID = '#firstName'
        const LASTNAME_ID = '#lastName'
        const EMAIL_ID = '#userEmail'
        const AGE_ID = '#age'
        const SALARY_ID = '#salary'
        const CREW_ID = '#department'
        const SUBMIT_ID = '#submit'

        cy.get(NAME_ID, {timeout: 10000}).click().type(name)
        cy.get(LASTNAME_ID, {timeout: 10000}).click().type(lastName)
        cy.get(EMAIL_ID, {timeout: 10000}).click().type(email)
        cy.get(AGE_ID, {timeout: 10000}).click().type(age)
        cy.get(SALARY_ID, {timeout: 10000}).click().type(salary)
        cy.get(CREW_ID, {timeout: 10000}).click().type(crew)
        cy.get(SUBMIT_ID, {timeout: 10000}).click()
    
    }

    static editRecord(name = 'Editado', lastName = "Oliveira", email = '.br', age = 20, salary = 1000, crew = 'HR'){
        const EDITICON_ID = '#edit-record-4'
        cy.get(EDITICON_ID, {timeout: 10000}).click({force: true}).then(() => {
            this.createNewRecord(name, lastName, email, age, salary, crew)
        
        })

    }


    static deleteRecord(){
        const DELICON_ID = '#delete-record-4'
        cy.get(DELICON_ID, {timeout: 10000}).click()

    }


    static clickOnNewWindowBtn() {
        const WINDOWBTN_ID = "#windowButton"
        
        cy.window().then((win) => {
            cy.stub(win, "open").callsFake((url) => {
              
              win.location.href = url
            })

          })
          cy.get(WINDOWBTN_ID).click()
          cy.url().should("include", "/sample")

    }
    

    static clickCloseNewWindow(){
        cy.go("back")

    }

    static submitForm(){
        let studentRegTxt = 'Student Registration Form'
        let PRACTIVE_FORM_CLASS = '.practice-form-wrapper'
        let SUBMIT_ID = '#submit'
        cy.get(PRACTIVE_FORM_CLASS, {timeout: 10000}).contains(HTML_H_TAG[4], studentRegTxt)
            .should('exist').should('be.visible').then(() => {
                this.completeForm()
            
            })

    }


    static completeForm(){

        this.completeFirstName()
        this.completeLastName()
        this.completeEmail()
        this.completeGender()
        this.completeMobilePhone()
        this.completeDateBirth()
        this.completeSubjects()
        this.completeHobbies()
        //this.completePicture()
        this.completeCurrentAddress()
        this.completeState()
        this.completeCity()
        //this.clickOnSubmitBtn()
    }


    static completeFirstName(firstNameParam = 'Paulo'){
        const FIRSTNAME_ID = '#firstName'
        cy.get(FIRSTNAME_ID, {timeout: 10000}).click().then(() => {
                cy.get(FIRSTNAME_ID).type(firstNameParam)
            })
    
    }

 
    static completeLastName(lastNameParam = 'Zacarias') {
        const LASTNAME_ID = '#lastName';
        cy.get(LASTNAME_ID, { timeout: 10000 }).click().then(() => {
            cy.get(LASTNAME_ID).type(lastNameParam)
        })
    }
    

    static completeEmail(emailParam = 'emailTest@test.com') {
        const USEREMAIL_ID = "#userEmail";
        cy.get(USEREMAIL_ID, { timeout: 10000 }).click().then(() => {
            cy.get(USEREMAIL_ID).type(emailParam)
        })
    }
    

    static completeGender(genderParam = 0) {
        cy.get(GENDER_RADIO_ID[genderParam], { timeout: 10000 }).click({force: true}).then(() => {
            cy.log('Gênero selecionado com sucesso.');
        })
    }
    

    static completeMobilePhone(mobilePhoneParam = '0123456789') {
        const MOBILEPHONE_ID = '#userNumber';
        cy.get(MOBILEPHONE_ID, { timeout: 10000 }).click().then(() => {
            cy.get(MOBILEPHONE_ID).type(mobilePhoneParam, { timeout: 10000 });
        });
    }
    

    static completeDateBirth(dateBirthParam = '15 Apr 1987') {
        const DATEBIRTH_ID = '#dateOfBirthInput'
        cy.get(DATEBIRTH_ID, { timeout: 10000 }).click().then(() => {
            cy.get(DATEBIRTH_ID).type('{leftarrow}'.repeat(15), { timeout: 10000 }).then(() => {
                cy.get(DATEBIRTH_ID).type(dateBirthParam, { timeout: 10000 }).then(() => {
                    cy.get(DATEBIRTH_ID).type('{del}'.repeat(15), { timeout: 10000 }).then(() => {
                        cy.get(CURRENTADDRESS_ID, { timeout: 15000 }).click({force: true})
                    })
                    
                })
            })
        })
    }
    

    static completeSubjects(subjectsParam = 'Test') {
        const SUBJECTS_ID = '#subjectsContainer';
        cy.get(SUBJECTS_ID, { timeout: 10000 }).click().then(() => {
            cy.get(SUBJECTS_ID).type(subjectsParam, { timeout: 10000 });
        });
    }
    
    static completeHobbies(hobbiesParam = 0) {
        cy.get(HOBBIE_CHECKBOX_ID[hobbiesParam], { timeout: 10000 }).click({ force: true }).then(() => {
            cy.log('Hobby selecionado com sucesso.')
        })
    }

    
    static completePicture(filePathParam = fileTestPath) {
        const PIC_ID = '#uploadPicture';
        cy.get(PIC_ID, { timeout: 15000 }).selectFile(filePathParam, { timeout: 120000 }).then(() => {
            cy.log('Arquivo enviado com sucesso.')
        });
    }
    

    static completeCurrentAddress(currentAddressParam = 'Rua Jose Polli SJC - SP') {
        cy.get(CURRENTADDRESS_ID, { timeout: 15000 }).click().then(() => {
            cy.get(CURRENTADDRESS_ID).type(currentAddressParam, { timeout: 15000 })
        })

    }
 
    
    static completeState() {
        const STATE_ID = '#state';
        let stateClass = ".css-1hwfws3";
        cy.get(STATE_ID, { timeout: 15000 }).click({ force: true }).then(() => {
            cy.get(".css-19bqh2r", {timeout: 10000}).eq(0).click()
            cy.get('#react-select-3-option-0', {timeout: 10000}).click({force: true})

        })
    }
    

    static completeCity() {
        const CITY_ID = '#city';
        let cityClass = '.css-19bqh2r'
        cy.get(CITY_ID, { timeout: 15000 }).click({ force: true }).then(() => {
            cy.get(cityClass, { timeout: 15000 }).eq(1).click({ force: true })
            cy.get('#react-select-4-option-0', {timeout: 10000}).click({force: true})
            
        })
    }
    
    
    static clickOnSubmitBtn(){
        const SUBMIT_ID = "#submit"
        cy.get(SUBMIT_ID, {timeout: 15000}).click()
    }


    static checkOpennedPopUp(){
        const THANKSSUBMIT = 'Thanks for submitting the form'
        const POPUP_ID = '#example-modal-sizes-title-lg'
        cy.get(POPUP_ID, {timeout: 20000}).contains(THANKSSUBMIT, {timeout: 20000})
    }


    static closePopUp(){
        const CLOSEPOPUP_ID = '#closeLargeModal'
        cy.get(CLOSEPOPUP_ID, {timeout: 15000}).click({force: true, timeout: 15000})
    }


    static ordanate(){
        const VERTICALLIST_CLASS = '.vertical-list-container .list-group-item'
        cy.get(VERTICALLIST_CLASS, { timeout: 10000 })
            .then(($items) => {
                const texts = [...$items].map((item) => item.innerText.trim())            
                cy.log('Textos capturados:', texts)
                cy.log('Textos esperados:', ['One', 'Two', 'Three', 'Four', 'Five', 'Six'])

                expect(texts).to.deep.equal(['One', 'Two', 'Three', 'Four', 'Five', 'Six'])
            })

    }


}

            
        
   

