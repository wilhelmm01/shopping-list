const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
  res.render('homepage');
});

router.get('/login', withAuth,(req, res) => {
  res.render('login');
});

router.get('/new-user', withAuth, (req, res) => {
  res.render('signup');
});

router.get('/signin', withAuth, (req, res) => {
  res.render('shopping');
});


module.exports = router;