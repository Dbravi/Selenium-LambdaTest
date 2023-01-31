const { By, Builder, Key } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const should = require("chai").should();
let options = new firefox.Options();
options.setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');


describe("Amazon car buy and delete", function () {

  it("Checking 5th result of amazon, adding to car and deleting from car:", async function () {

    let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    driver.manage().window().maximize();

    await driver.get('https://www.amazon.com/-/es/');

    
    await driver.findElement(By.xpath('//*[@id="twotabsearchtextbox"]')).sendKeys("gorras");
    await driver.findElement(By.xpath("//input[@id='nav-search-submit-button']")).click();
    await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[8]/div/div/div/div/div[1]/span/a/div/img")).click();
    await driver.findElement(By.xpath('//*[@id="add-to-cart-button"]')).click();
    await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[1]/div[2]/div/div[1]/span/span/a')).click();
    await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div[3]/div[3]/div/div[2]/div[1]/div/form/div[2]/div[3]/div[4]/div/div[2]/div[1]/span[2]/span/input')).click();
   
  });
});