module.exports = function(app){
  app.use('/api/user' , require('./api/modules/user/user.router.js'));
}
