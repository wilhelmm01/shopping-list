const seedList = require('../seeds/shopping')
const seedPosts = require('./post-seeds');
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedList();
    console.log('--------------');
    await seedPosts();
    console.log('--------------');


    process.exit(0);
  };
  



  seedAll();
  