### AJAX Vs Full Load Page

#### This project includes
* Backend - A simple node.js server to test your work locally and get a better understanding. 
* Frontend A form and list appended Dynamically
  * An input box for typing messages
  * Submit button

##### Prerequisits for the project
* NPM and node installed

#### Start with the project
* Clone the repository
* Change the terminal to that repository
* Open the project in some editor (VSCode type  `code .` )
* run the command `npm install` in the terminal
* Work with two types of project one by one

* ##### Full Load page
  * type command `npm run-script fullLoad`
  * Go to web Browser and type `http://localhost:3005`
  * You will see a heading, Input box and a submit button.
  * Try entering a text and submit.
  * Open the folder Full_page_load -
  * then make the changes as per guided by the **server.js** file to understand the flow
  * To close the server press `Ctrl+C` and then `Y`
  
  * ###### Points which shows full page is Loaded -
    * `console.log('Full Load Page for first time')` prints only once
    * Heading has been changed


* ##### AJAX
  * type command `npm run-script ajax`
  * Go to web Browser and type `http://localhost:3005`
  * You will see a heading, Input box and a submit button.
  * Try entering a text and submit.
  * Open the folder Ajax -
  * then make the changes as per guided by the **index.js** file in **public_static** folder and **server.js** file gradually to understand the flow.


##### Points To remember 
- Only single node.js server will run at a time so make sure to run one at a time.
- try to put `console.log()` at different places in JS files.
- Make changes gradually to understand the concept.
- Whatever is send by the server the Browser treats it as an HTML object and displays as it is.

##### Common Errors
- Console.log() of server.js are viewed in terminal where it is running and of frontend ,are viewed on browser console (CTRL + SHIFT + I)
- A single response should be there for a single request hence multiple send will not work in server.js.  
- Restart the server ever time a change is made to server.js and refresh the browser for frontend changes.   