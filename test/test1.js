const {By, Builder, Key} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');


async function example(){

let options = new firefox.Options();
options.setBinary('C:/Program Files/Mozilla Firefox/firefox.exe');


//launch the browser
let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

    
//navigate to the application
      await driver.get('https://lambdatest.github.io/sample-todo-app/');

     
     
//add a todo
      for (i=0; i <10; i++){
        await driver.findElement(By.id('sampletodotext')).sendKeys("ITEM"+i,Key.RETURN);
      }
      
    };

  example();
  