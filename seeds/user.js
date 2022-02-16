
const { User} = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    password: 'password123',
    
  },
  {
    username: 'testuser',
    password: '22222',
    email: 'test@aol.com',
  },
  {
    username: 'iboddam2',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    password: 'password123'
  },
  {
    username: 'djiri4',
    password: 'password123'
  },
  {
    username: 'msprague5',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
