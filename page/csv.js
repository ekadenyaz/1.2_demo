var fs = require('fs')
var readline = require('readline')

var csvCommands = {
    fillForm: function(browser, personData) {
        //        var personData = personDataList.toString().split('\t')
        var educationArray = ['NOT ATTENDING SCHOOL', 'ELEMENTARY SCHOOL', 'JUNIOR HIGH SCHOOL', 'SENIOR HIGH SCHOOL', 'TECHNICAL COLLEGE', 'BACHELOR DEGREE', 'MASTER DEGREE', 'DOCTOR DEGREE', 'OTHER']
        var employmentStatusArray = ['FULL TIME', 'PART TIME', 'SELF EMPLOYED', 'STUDENT', 'DISMISSED', 'UNEMPLOYED', 'OTHERS']
        var jobPositionArray = ['Others', 'Manager', 'Supervisor', 'Staff', 'Director']
        var name = personData[0]
        var pob = personData[10]
        var nik = personData[9]
        var mobile = '87736900198'
        var education = educationArray[Math.floor(Math.random() * educationArray.length)] //13
        var maritalStatus = personData[14]
        var dependencies = parseInt(personData[15])
        var zip = personData[5]
        var areaCode = '+62'
        var province = 'Jawa Barat'
        var city = 'Bekasi'
        var region = 'Pondok Melati'
        var kelurahan = 'Jatiwarna'

        var employmentStatus = employmentStatusArray[Math.floor(Math.random() * employmentStatusArray.length)]
        var employerName = 'BANK CENTRAL ASIA'
        var jobIndustry = 'Leasing'
        var jobPosition = jobPositionArray[Math.floor(Math.random() * jobPositionArray.length)]
        var jobType = 'Education' //.toUpperCase()
        var monthlyIncome = personData[23]
        var companyAreaCode = '+62'
        var companyLandline = '21 - 4609412'
        var companyZip = '17139'
        var workSinceDate = '2014-03-30'
        var companyAddress = personData[1]

        var homeStatus = 'RENT'
        var monthlyRental = personData[24]
        var residentialPhone = '21 - 84203362'
        var residentialAreaCode = '+62'
        var residentialZip = personData[5]
        var residentialAddress = personData[1] //.toUpperCase()

        this.waitForElementVisible('@nameField', 120000, '------------------------------------------------- \n Succesfully Load the Application Page, Filling Application Page...')
            //            .click('@closeButton')
        this.clearValue('@nameField')
            .setValue('@nameField', name)
            .clearValue('@pobField')
            .setValue('@pobField', pob)
            .clearValue('@nikField')
            .setValue('@nikField', nik)
            .clearValue('@zipField')
            .setValue('@zipField', zip)
            .click('@areaCodeField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + areaCode + '"]')
            .clearValue('@mobileField')
            .clearValue('@mobileField')
            .setValue('@mobileField', mobile)
            .click('@provinceField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + province + '"]')
            .click('@educationField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + education + '"]')
            .click('@cityField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()[contains(.,"' + city + '")]]')
            .click('@maritalStatusField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + maritalStatus + '"]')
            .click('@regionField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + region + '"]')
            .click('@dependentsField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + dependencies + '"]')
            .click('@kelurahanField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + kelurahan + '"]')
            .click('@employmentStatusField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + employmentStatus + '"]')
            .clearValue('@employerNameField')
            .setValue('@employerNameField', employerName)
            .click('@jobIndustryField')
            .dropDownPause(browser, 5000)
        this.click('//span[text()="' + jobIndustry + '"]')
            .clearValue('@monthlyIncomeField')
            .setValue('@monthlyIncomeField', monthlyIncome)
            .click('@jobPositionField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + jobPosition + '"]')
            .click('@companyAreaCodeField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + companyAreaCode + '"]')
            .clearValue('@companyLandlineField')
            .setValue('@companyLandlineField', companyLandline)
            .click('@jobTypeField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + jobType + '"]')
            .clearValue('@companyZipField')
            .setValue('@companyZipField', companyZip)
            .clearValue('@workSinceDateField')
            .click('@workSinceDateField')
            .dropDownPause(browser, 2000)
            //        this.click('/html/body/div[2]/div[1]/div/div[2]/table[1]/tbody/tr[2]/td[7]')
        this.setValue('@workSinceDateField', workSinceDate)
            .click('@workSinceDateField')
            .clearValue('@companyAddressField')
            .setValue('@companyAddressField', companyAddress)
            .click('@homeStatusField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + homeStatus + '"]')
            .clearValue('@monthlyRentalField')
            .setValue('@monthlyRentalField', monthlyRental)
            .clearValue('@residentialZipField')
            .setValue('@residentialZipField', residentialZip)
            .click('@residentialAreaCodeField')
            .dropDownPause(browser, 1000)
        this.click('//span[text()="' + residentialAreaCode + '"]')
            .click('@residentialPhoneField')
            .clearValue('@residentialPhoneField')
            .setValue('@residentialPhoneField', residentialPhone)
            .clearValue('@residentialAddressField')
            .setValue('@residentialAddressField', residentialAddress)
            .waitForElementVisible('@submitButton', 2000, 'Finished Filling the application')
    },
    dropDownPause: function(browser, time) {
        browser.pause(time)
    },
    getPersonalData: function(filePath) {
        var array = fs.readFileSync(filePath).toString().split("\n")
        return array
    },
}

module.exports = {
    commands: [csvCommands],
    url: 'http://dev-fe.advance.ai/application',
    elements: {
        closeButton: {
            selector: '//i[@class="el-dialog__close el-icon el-icon-close"]',
            locateStrategy: 'xpath'
        },
        uploadButton: {
            selector: '//*[@id="upload"]',
            locateStrategy: 'xpath'
        },
        //Identity Part
        nameField: {
            selector: '(//input[@type="text"])[position()=1]',
            locateStrategy: 'xpath'
        },
        pobField: {
            selector: '(//input[@type="text"])[position()=2]',
            locateStrategy: 'xpath'
        },
        nikField: {
            selector: '(//input[@type="text"])[position()=3]',
            locateStrategy: 'xpath'
        },
        zipField: {
            selector: '(//input[@type="text"])[position()=4]',
            locateStrategy: 'xpath'
        },
        areaCodeField: {
            selector: '(//input[@type="text"])[position()=5]',
            locateStrategy: 'xpath'
        },
        mobileField: {
            selector: '(//input[@type="text"])[position()=6]',
            locateStrategy: 'xpath'
        },
        provinceField: {
            selector: '(//input[@type="text"])[position()=7]',
            locateStrategy: 'xpath'
        },
        educationField: {
            selector: '(//input[@type="text"])[position()=8]',
            locateStrategy: 'xpath'
        },
        cityField: {
            selector: '(//input[@type="text"])[position()=9]',
            locateStrategy: 'xpath'
        },
        maritalStatusField: {
            selector: '(//input[@type="text"])[position()=10]',
            locateStrategy: 'xpath'
        },
        regionField: {
            selector: '(//input[@type="text"])[position()=11]',
            locateStrategy: 'xpath'
        },
        dependentsField: {
            selector: '(//input[@type="text"])[position()=12]',
            locateStrategy: 'xpath'
        },
        kelurahanField: {
            selector: '(//input[@type="text"])[position()=13]',
            locateStrategy: 'xpath'
        },

        //Employment Part
        employmentStatusField: {
            selector: '(//input[@type="text"])[position()=14]',
            locateStrategy: 'xpath'
        },
        employerNameField: {
            selector: '(//input[@type="text"])[position()=15]',
            locateStrategy: 'xpath'
        },
        jobIndustryField: {
            selector: '(//input[@type="text"])[position()=16]',
            locateStrategy: 'xpath'
        },
        monthlyIncomeField: {
            selector: '(//input[@type="text"])[position()=17]',
            locateStrategy: 'xpath'
        },
        jobPositionField: {
            selector: '(//input[@type="text"])[position()=18]',
            locateStrategy: 'xpath'
        },
        companyAreaCodeField: {
            selector: '(//input[@type="text"])[position()=19]',
            locateStrategy: 'xpath'
        },
        companyLandlineField: {
            selector: '(//input[@type="text"])[position()=20]',
            locateStrategy: 'xpath'
        },
        jobTypeField: {
            selector: '(//input[@type="text"])[position()=21]',
            locateStrategy: 'xpath'
        },
        companyZipField: {
            selector: '(//input[@type="text"])[position()=22]',
            locateStrategy: 'xpath'
        },
        workSinceDateField: {
            selector: '(//input[@type="text"])[position()=23]',
            locateStrategy: 'xpath'
        },
        companyAddressField: {
            selector: '(//input[@type="text"])[position()=24]',
            locateStrategy: 'xpath'
        },

        //Residential Part
        homeStatusField: {
            selector: '(//input[@type="text"])[position()=25]',
            locateStrategy: 'xpath'
        },
        monthlyRentalField: {
            selector: '(//input[@type="text"])[position()=26]',
            locateStrategy: 'xpath'
        },
        residentialZipField: {
            selector: '(//input[@type="text"])[position()=27]',
            locateStrategy: 'xpath'
        },
        residentialAreaCodeField: {
            selector: '(//input[@type="text"])[position()=28]',
            locateStrategy: 'xpath'
        },
        residentialPhoneField: {
            selector: '(//input[@type="text"])[position()=29]',
            locateStrategy: 'xpath'
        },
        residentialAddressField: {
            selector: '(//input[@type="text"])[position()=30]',
            locateStrategy: 'xpath'
        },
        submitButton: {
            selector: '//*[@id="submit"]',
            locateStrategy: 'xpath'
        },
    },

}