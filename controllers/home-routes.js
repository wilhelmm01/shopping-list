const router = require('express').Router();
// const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/new-user',  (req, res) => {
  res.render('signup');
});

router.get('/signin', (req, res) => {
  res.render('shopping');
});


module.exports = router;