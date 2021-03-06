# Node Express Handlebars - BurgerEats

### Overview

A (burger) logger application with MySQL, Node, Express, Handlebars and a customized ORM. The application build utilizes MVC design pattern; as well as Node and MySQL to query and route data in the app. Express Handlebars is used to generate then HTML with Bootstrap.

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

- GitHub Repository at https://github.com/andrewcircelli/BurgerEats

- Deployed Heroku Application at https://andrewcircelli-heroku-burger.herokuapp.com/

---
