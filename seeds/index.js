const seedList = require('../seeds/shopping')
const seedUser = require('../seeds/user')
const sequelize = require('../config/connection')
const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedList();
    console.log('--------------');
    await seedUser();
    console.log('--------------');


    process.exit(0);
  };
  



  seedAll();
  