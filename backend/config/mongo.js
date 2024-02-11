const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (connectionCB) => {
    MongoClient.connect("mongodb://localhost:27017/bookshelf")
      .then((client) => {
        dbConnection = client.db();
        return connectionCB();
      })
      .catch((error) => {
        console.log("Error while connecting MongoDB: ", error);
        return connectionCB(error);
      });
  },
  getDb: () => dbConnection,
};