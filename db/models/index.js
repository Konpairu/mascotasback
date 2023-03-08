const { Pet, PetSchema } = require ('./pets.model');
const { Owner, OwnerSchema } = require ('./owners.model');


function setupModels(sequelize){
    Pet.init(PetSchema, Pet.config(sequelize));
    Owner.init(OwnerSchema, Owner.config(sequelize));
    
    Pet.belongsTo(Owner)
    Owner.hasMany(Pet)
}

module.exports = setupModels;