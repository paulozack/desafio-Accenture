export const HTML_H_TAG = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']
export const CATEGORY_CARDS_CLASS = '.category-cards'
export const LEFT_PANEL_CLASS = '.left-pannel'
export const TEXT_CENTER_CLASS = '.text-center'

export const CURRENTADDRESS_ID = '#currentAddress'

export const GENDER_RADIO_ID = ['#gender-radio-1', '#gender-radio-2','#gender-radio-3']
export const HOBBIE_CHECKBOX_ID = ['#hobbies-checkbox-1', '#hobbies-checkbox-2', '#hobbies-checkbox-3']





/*static completeLastName(lastNameParam = 'Zacarias'){
        const LASTNAME_ID = '#lastName'
        cy.get(LASTNAME_ID, {timeout: 10000}).type(lastNameParam, {timeout: 10000}) 
    }

    static completeEmail(emailParam = 'emailTest@test.com'){
        const USEREMAIL_ID = "#userEmail"
        cy.get(USEREMAIL_ID, {timeout: 10000}).click().type(emailParam, {timeout: 10000}) 

    }
    
    static completeGender(genderParam = 0){
        cy.get(GENDER_RADIO_ID[genderParam], {timeout: 10000}).click({force: true, timeout: 10000}) 

    }

    static completeMobilePhone(mobilePhoneParam = '+5511999999999'){
        const MOBILEPHONE_ID = '#userNumber'
        cy.get(MOBILEPHONE_ID, {timeout: 10000}).click().type(mobilePhoneParam, {timeout: 10000}) 

    }

    static completeDateBirth(dateBirthParam = '15 Apr 1987'){
        const DATEBIRTH_ID = '#dateOfBirthInput'
        cy.get(DATEBIRTH_ID, {timeout: 10000}).click().type(dateBirthParam, {timeout: 10000}) 
    }

    static completeSubjects(subjectsParam = 'Test'){
        const SUBJECTS_ID = '#subjectsContainer'
        cy.get(SUBJECTS_ID, {timeout: 10000}).click().type(subjectsParam, {timeout: 10000})
    }

    static completeHobbies(hobbiesParam = 0){ 
        cy.get(HOBBIE_CHECKBOX_ID[hobbiesParam], {timeout: 10000}).click({force: true,  timeout: 10000})
    }

    static completePicture(filePathParam = fileTestPath){
        const PIC_ID = '#uploadPicture'
        cy.get(PIC_ID, {timeout: 15000}).selectFile(filePathParam, {timeout: 120000})

    }

    static completeCurrentAddress(currentAddressParam = 'Rua Jose Polli SJC - SP'){
        const CURRENTADDRESS_ID = '#currentAddress'
        cy.get(CURRENTADDRESS_ID, {timeout: 15000}).type(currentAddressParam, {timeout: 15000})

    }

    static completeState(){
        const STATE_ID = '#state'
        let stateCLass = ". css-1hwfws3"
        cy.get(STATE_ID, {timeout: 15000}).click({force: true, timeout: 15000})
        cy.get(stateCLass, {timeout: 15000}).click({force: true, timeout: 15000})

    }

    static completeCity(){
        const CITY_ID = '#city'
        let cityClass = '. css-1hwfws3'
        cy.get(CITY_ID, {timeout: 15000}).click({ force: true, timeout: 15000})
        cy.get(cityClass, {timeout: 15000}).click({ force: true, timeout: 15000})

    }

}*/