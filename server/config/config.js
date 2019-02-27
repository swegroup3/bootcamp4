//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb://rantsdev:hUk8nf63lMi0@ds153495.mlab.com:53495/bodegadev'
  },
  port:8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */