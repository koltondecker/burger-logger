const connection = require('./connection');

const orm = {

    selectAll: function(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(tableInput, cols, vals, cb) {
        const queryString = `INSERT INTO ${tableInput} (${cols}) VALUES (${vals})`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    // updateOne: function() {
    //     console.log('hi'); 
    // }

};

module.exports = orm;