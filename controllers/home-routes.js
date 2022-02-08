const router = require('express').Router();
const sequelize = require('../config/connection')
const { Post, User } = require('../models')

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM post WHERE post.id = post_id)'), 'post_count']
    ],
    include: [
      {
      model: User,
      attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    // pass a single post object into the homepage
    const posts = dbPostData.map(post => post.get({ plain: true }));

    console.log(dbPostData[0]);
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.get('/login', (req, res) => {
  if (req.session.loggedin) {
    res.redirect('/');
    return;
  }
  
  res.render('login');
});

module.exports = router;