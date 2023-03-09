const { Sequelize, INTEGER, STRING, DATE, Model } = require('sequelize');
const fs = require('fs/promises')

const sequelize = new Sequelize('postgres://username:password@127.0.0.1:5432/default_database')


class Test extends Model {}

Test.init( {
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
}, {sequelize, tableName: 'test', timestamps: false})


async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, {encoding: 'utf8'});

        return(data)
    } catch (err) {
        console.log(err)

        return (null)
    }
}


async function updateDataBase(filePath) {
    const raw = await readFile(filePath)

    const lines = raw.split("\r\n")

    const data = lines.map((r) => r.split(','))

    const keys = data[0]
    const objects = []

    for (let i = 1; i < data.length; i++) {
        const obj = {}
        const current = data[i]

        for (let j = 0; j < keys.length; j++) {
            obj[keys[j]] = current[j]
        }

        objects.push(obj)
    }    

    objects.forEach(async e => {
        const match = await sequelize.models.Test.findOne({where: {id: e.id}})

        if (match) {
            console.log(match, e.id)
            sequelize.models.Test.update({productTitle: e.productTitle, price: e.price, vat: e.vat}, {where: {id: e.id}})
        } else {
            sequelize.models.Test.create({productTitle: e.productTitle, price: e.price, vat: e.vat})
        }
    })
}

updateDataBase('./test.csv')