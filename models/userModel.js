const {DataTypes} = require('sequelize')

import db from '../db'

const user = db.define('user',{
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    }

    
})