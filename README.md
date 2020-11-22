# Node Express Handlebars - Burger Application

### Overview

A (burger) logger application with MySQL, Node, Express, Handlebars and a customized ORM. The application build utilizes MVC design pattern; as well as Node and MySQL to query and route data in the app. Express Handlebars is used to generate then HTML with Bootstrap.

### Important

* **This assignment must be deployed.** Be sure to utilize the [MYSQL Heroku Deployment Guide](../../04-Important/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.

## Instructions

To run the application, please clone the repo from GitHub to your local machine. Once the files are on the local machine, you can run 'npm start' to initialize the server and open the application on local host.

#### Directory Structure

Below is how the directory is set up using MVC design.

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Accessing the Application

* GitHub Repository
* 

- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -
