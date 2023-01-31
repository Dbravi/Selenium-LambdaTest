const { By, Builder, Key } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const should = require("chai").should();
let options = new firefox.Options();
options.setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');


describe("Login test", function () {

  it("Checking login to application:", async function () {

    let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    driver.manage().window().maximize();

    await driver.get('https://demo.guru99.com/test/newtours/login.php');

    await driver.findElement(By.xpath("//input[@name='userName']")).sendKeys("asd");
    await driver.findElement(By.xpath("//input[@name='password']")).sendKeys("asd");
    await driver.findElement(By.xpath("//input[@name='submit']")).click();
    let url = await driver.getCurrentUrl().then(function (value) {
      return value
    });

    url.should.equal("https://demo.guru99.com/test/newtours/login_sucess.php");
    
    driver.get("http://127.0.0.1:5500/testReport/testResults.html");
    
  });
});


