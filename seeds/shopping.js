const { Post } = require('../models');

const shoppingList = [
    {
      user_id: 1,
      Item: 'Milk $2.99',
      price: 2.99,
      
    },
    {
      user_id: 1,
      Item: 'Paper Towels',
      price: 3,
    
      
      
      
    },
    // {
    //     Item: 'Shampoo',
    //     price: 8.99,
    //   },   
    //    {
    //     Item: 'Hamburger',
    //     price: 7.50,
    //   },   
    //    {
    //     Item: 'Pop',
    //     price: 8.00,
    //   },   
    //    {
    //     Item: 'Toilet Paper',
    //     price: 17.25,
    //   },   
    //    {
    //     Item: 'Bread',
    //     price: 2.75,
    //   },
    //   {
    //     Item: 'Cereal',
    //     price: 6.50,
    //   },
    //   {
    //     Item: 'Soap',
    //     price: 5.00,
    //   },
    
    
  ];
  
  const seedList = () => Post.bulkCreate(shoppingList);
  
  module.exports = seedList;
