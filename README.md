# Eat Da Burger V2

### Overview

This is a burger logger app the uses MySQL, Node, Express, Handlebars and a homemade ORM. All code follows the MVC design pattern, which uses Node and MySQL to query and route data and Handlebars to generate the .



### Before You Begin

* Eat Da Burger is an app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be eaten.

* Each burger also has a `Eat Me` button. When the user clicks it, the burger will move to the right side of the page.

* All burgers and there status of eaten or not is stored in a MySQL database persiting the data.

#### Config Setup

1. Inside the db folder you will find the files used to create the needed database.

2. You simply run the sql scripts Create a `connection.js` file inside `config` directory.

   * Inside the `connection.js` file, setup the code to connect Node to MySQL.

   * In the config folder you will find the connection.js file which is where you need to set your database username and password.

3. The last step is to run ```npm i``` which will install all the requireded dependencies.

###Using the app

To start the app type these commands:
```node server.js```

Enjoy! 
