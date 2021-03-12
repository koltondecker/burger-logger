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

    updateOne: function(tableInput, cols, vals, id, cb) {
        const queryString = `UPDATE ${tableInput} SET ${cols} = ${vals} WHERE id = ${id}`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }

};

module.exports = orm;