//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb://test:m5MbCN4GGW7eJzZ@ds121135.mlab.com:21135/bootcamp3mongotestscs'
  },
  port:8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */