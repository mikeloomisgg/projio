var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test');

class Database {
  fetch () {
    db.serialize(function() {
      db.run("CREATE TABLE temp_tasks (name TEXT)");

      var stmt = db.prepare("INSERT INTO temp_tasks VALUES (?)");
      for (var i = 0; i < 10; i++) {
          stmt.run("Ipsum " + i);
      }
      stmt.finalize();

      db.each("SELECT rowid AS id, name FROM temp_tasks", function(err, row) {
          console.log(row.id + ": " + row.name);
      });

      db.close();
    });
  }
};

export default new Database;
