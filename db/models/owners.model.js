const { Model, DataTypes } = require('sequelize')

const OWNER_TABLE = 'owners';

class Owner extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: OWNER_TABLE,
            modelName: 'Owner',
            timestamps: true
        }
    }
}

const OwnerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER

    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'
    },
    phone: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'phone'
    }
}

//Pet.belongsTo(Owner)
module.exports = { Owner, OwnerSchema };