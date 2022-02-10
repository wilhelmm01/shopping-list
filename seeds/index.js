const seedList = require('../seeds/shopping')
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedList();
    console.log('--------------');


    process.exit(0);
  };
  



  seedAll();
  