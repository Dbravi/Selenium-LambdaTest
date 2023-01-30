const { By, Builder, Key } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const assert= require('assert');
const should = require("chai").should();

async function example() {

  let options = new firefox.Options();
  options.setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');


  //launch the browser
  let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();


  //navigate to the application
  await driver.get('https://lambdatest.github.io/sample-todo-app/');



  //add a todo
 // for (i = 0; i < 10; i++) {
 //   await driver.findElement(By.id('sampletodotext')).sendKeys("ITEM" + i, Key.RETURN);
 // }

  await driver.findElement(By.id('sampletodotext')).sendKeys("Learning Selenium", Key.RETURN);

  //asserts: get value from DOM

  let todoText= await driver.findElement(By.xpath('//li[last()]')).getText().then(function(value){
    return value
  });
  
  //assert using Node
  //assert.strictEqual(todoText,"Learning Celenium");
 
  //asserts using Chai

  todoText.should.equal("Learning Selenium");


  //close the browser
   await driver.quit();
};



example();
