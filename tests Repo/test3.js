const { By, Builder, Key } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
let options = new firefox.Options();
options.setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');

async function example() {

    let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

    await driver.get('https://demo.guru99.com/test/newtours/login.php');

    

    await driver.findElement(By.xpath("//input[@name='userName']")).sendKeys("asd");
    await driver.findElement(By.xpath("//input[@name='password']")).sendKeys("asd");
    await driver.findElement(By.xpath("//input[@name='submit']")).click();
    // await driver.quit();
}

example()

//input[@name='userName']
//input[@name='password']
//input[@name='submit']