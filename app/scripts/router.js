var MainRouter = Backbone.Router.extend({

  routes: {
    "" : "signInPage",
    "home" : "homePage"
  },

  signInPage: function() {
    new SigninView()
  },

  homePage: function(){
    new HomeView()
  }

});