const { Sequelize, INTEGER, STRING, DATE, Model } = require('sequelize');

// class Test extends Model {}
// Test.init({
//     id: {
//         type: INTEGER,
//         primaryKey: true,
//     },
//     productTitle: STRING,
//     price: INTEGER,
//     vat: INTEGER,
//     lastModifiedAt: DATE,
//     createdAt: DATE
// }, {sequelize})

const Test = sequelize.define('Test', {
    id: {
        type: INTEGER,
        primaryKey: true,
    },
    productTitle: {
        type: STRING,
        allownull: true,
    },

    price: {
        type: STRING,
        allownull: true,
    },
    vat: {
        type: STRING,
        allownull: true,
    },
    lastModifiedAt: {
        type: DATE,
        allownull: true,
    },
    createdAt: {
        type: DATE,
        allownull: true,
    }
})

module.exports = Test;