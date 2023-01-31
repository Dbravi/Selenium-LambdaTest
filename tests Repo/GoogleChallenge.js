const { By, Builder, Key } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const should = require("chai").should();
let options = new firefox.Options();
options.setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');


describe("Search cheese", function () {

  it("Checking cheese on search results:", async function () {

    let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    driver.manage().window().maximize();

    await driver.get('https://www.google.com/');

    await driver.findElement(By.xpath("//input[@title='Buscar']")).sendKeys("cheese");
    await driver.findElement(By.xpath("//div[@class='FPdoLc lJ9FBc']//input[@name='btnK']")).click();
    let searchResult = await driver.findElement(By.className('LC20lb MBeuO DKV0Md')).getText().then(function (value) {
      return value
    });
    
    searchResult.should.contain("cheese");
    
    await driver.quit();
  });
});



