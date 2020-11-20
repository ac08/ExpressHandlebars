// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB (connection module)
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
// Create a table; it will create table if it does not already exist
var Character = sequelize.define("character", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  name: Sequelize.STRING,
  // the character's role (a string)
  role: Sequelize.STRING,
  // the character's age (a string)
  age: Sequelize.INTEGER,
  
  // and the character's force points (an int)
  forcePoints: Sequelize.INTEGER
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB using the sync method ; option one is to 
// invoke sync() on the model
// may also invoke sync on the connection 
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
