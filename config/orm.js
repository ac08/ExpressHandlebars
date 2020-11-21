// Import MySQL connection.
const connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  let arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Property Name => 'Property Name')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Cowboy Burger'} => ["name='Cowboy Burger'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {
  all: function(tableInput, cb) {
    let sql = "SELECT * FROM " + tableInput + ";";
    connection.query(sql, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    let sql = "INSERT INTO " + table;

    sql += " (";
    sql += cols.toString();
    sql += ") ";
    sql += "VALUES (";
    sql += printQuestionMarks(vals.length);
    sql += ") ";

    console.log(sql);

    connection.query(sql, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: burger, devoured: true}
  update: function(table, objColVals, condition, cb) {
    let sql = "UPDATE " + table;

    sql += " SET ";
    sql += objToSql(objColVals);
    sql += " WHERE ";
    sql += condition;

    console.log(sql);
    connection.query(sql, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
