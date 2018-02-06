# DAT-coding-challenge app

## Description
This is a small completed working web server and client app that meets the
requirements given to me by DAT via my recruiter.

## Requirements
The Details that I were given are pasted below:
```
DAT Coding Challenge
Purpose and Expected Effort
The purpose of the coding challenge is to give the candidate an opportunity to present DAT with evidence of his or her abilities so that we may focus the interview more effectively.  It is not intended to be a test of endurance and should not take more than four hours to complete.
Background and Technology
Our company is deploying a cloud based microservices architecture for all of our current development.  We support both Node.js and Java based services.  We use Spring Boot for our Java development and Express for Node development but are open to using other (or no) frameworks.

Client side development is done in Angular2 but we are open to using React.  We also support IOS and Android native clients and B2B integrations with our services.
Assignment
Service
We have a service that allows for the creation, modification, deletion and merging of a customer.  Customers are identified by a unique key assigned by us when created and have the usual customer data: Name, Company, Address, Customer Type, Phone Number, Email, etc.  The service code can be found at https://bitbucket.org/dat-jack/coding-challenge-customer-service. Please refer to that page for instructions for installing and running the apis.
Client
We need a web front end that executes all of the end-points provided by the service.  We have a UI design team so the client doesn’t need to be pretty or even that useable; for example,  it’s perfectly acceptable for the UI to have a textbox where the user enters the raw payload and a button for posting it.  But, it should be consistent with our technology stack and work.  
Assignment
Please develop the UI.  

We’d like to be able to clone a repo and execute a script to see how it all works.  Please allow DAT at least a day to review the project before the scheduled interview.
Deliverables (Client):


Client source code



Scripts for building, running tests, and starting the server.
```

## Requirements and Installation
to begin you will need to have Node v6.11.0 installed.

1. clone / download repo
2. Navigate to the repo in command line and run the following commands.
3. (if you have node version manager) run: `nvm use` this will ensure your version is set to 6.11.0
4. run: `npm i` this will install the packages and dependencies.
5. run: `npm i webpack -g` this will install webpack globally so it can be used in the CLI.
6. run: `npm run build` this builds the client app running in React.
7. run: `npm start` this starts the web server.
8. navigate to http://localhost:3000 in your browser
9. ??
10. Profit. You should be up and running and able to test the application

## What I did and Why.
After looking at the repository on bitbucket I noticed that the web server was a Java runtime using the spring boot framework. The written requirements said that Node.js based services were acceptable so (because I am fluent in Node, but as much Java) I took the liberty of rewriting the web server using Node.js and the Express framework. It's as close as an approximation as I could possibly get. The main difference is that `CustomerStub.jar` uses a Map while my `CustomerStub.js` uses an Array. I changed this because Map Objects do not translate well into JSON without some additional magic that was already present in the `CustomerStub.jar` via Spring Boot. I recognize the superiority of Map Objects over Arrays especially in regards to data storage and immutability, but Arrays are easier to implement for small tests like this.

Additionally, I used React over Angular2 for the client app because Like Node vs Java my React Experience vastly outweighs my Angular2 experience, and the requirements said it was acceptable. Additionally I used a Flux implementation called 'Alt' for my state management as it works out of the box with the unidirectional flow of React (in regards to both data flow and the lifecycle direction);

Apart from those changes I believe all of the requirements for the challenge are completed and all code works error free. It isn't beautifully styled, but it works and works well.
