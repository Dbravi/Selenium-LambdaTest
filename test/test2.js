const { By, Builder, Key } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const should = require("chai").should();
let options = new firefox.Options();
options.setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');

//Mocha describe block

describe("add another todo test", function () {
  //it block
  it("succesfully add another todo to appplication", async function () {
    //launch the browser
    let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();


    //navigate to the application
    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    await driver.findElement(By.id('sampletodotext')).sendKeys("Test 2", Key.RETURN);
    
    //asserts: get value from DOM
    let todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then(function (value) {
      return value
    });


    //asserts using Chai
    todoText.should.equal("Test 2");

    //close the browser
    await driver.quit();

  });
  
});
