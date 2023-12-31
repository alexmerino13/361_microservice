# Book Cover Microservice


## Description
This is a microservice that accepts a book isbn identifier and 
returns the cover art image for the book.

## Prerequisites
In order to run this application locally you must have the following things installed on your local machine.
* Node.js
    * You can install Node.js by going to [nodejs.org](https://nodejs.org/en)
* Code Editor
    * You can install a code editor like Visual Studio code by going to [code.visualstudio.com](https://code.visualstudio.com)

## Getting Started
To get a copy of this microservice running locally, follow these steps in a code editor on your local machine.
### Installation
1. Create a new folder for the microservice application and open the
folder in your code editor.
2. Open a terminal in the root directory of your project.
3. Clone the repository containing the application files.
```
git clone https://github.com/alexmerino13/361_microservice.git
```
4. Use the npm init command to create a package.json file for the application. Follow all prompts in the terminal window for creating the package.json.
```
npm init
```
5. Install NPM packages.
```
npm install
```
6. Install the express package.
```
npm install express
```
7. Install the XMLHttpRequest package.
```
npm install xmlhttprequest
```

### Usage
1. Open a terminal in the root directory of your project.
2. Run the following command in the terminal to start running the application.
```
node app.js
```
3. Test that the application is running correctly by accessing the cover_image endpoint in a web browser to retrieve the cover image for your favorite book like [The Great Gatsby](http://localhost:3923/cover_image?isbn=9780743273565).
4. The cover_image endpoint will return a json object with the cover image information.
```javascript 
{"file":"covers_0013/covers_0013_02.zip","url":"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg"}
```
### UML Sequence Diagram
![Book Microservice UML Diagram](./361_microservice_uml.png)