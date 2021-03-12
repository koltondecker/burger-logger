const { insertOne, updateOne } = require('../config/orm');
const orm = require('../config/orm');

const burger = {

    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    
    // updateOne(cb) {
    //     orm.updateOne();
    // }
    
}

module.exports = burger;