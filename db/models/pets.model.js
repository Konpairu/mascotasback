const { Model, DataTypes } = require('sequelize')

const PET_TABLE = 'pets';

class Pet extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: PET_TABLE,
            modelName: 'Pet',
            timestamps: true
        }
    }
}

const PetSchema = {
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
    race: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'race'
    },
    family: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'family'
    }
}

module.exports = { Pet, PetSchema };