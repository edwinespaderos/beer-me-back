
var SigninView = Parse.View.extend({
  
  renderTemplate: _.template($("#signin-view-template").text()),

  events: {
    "click .form-signin-heading": "signingUp",
    "click .js-create": "Home"
  },

  initialize: function(){
    $(".container").html(this.el)
    this.render()
  },

  render: function(){
    this.$el.html(this.renderTemplate())
  },

  signingUp: function(){
    $('.email').addClass('active')
    $('.js-create').addClass('active')
    $('.js-signup').addClass('active')
  },

  Home: function(){
        router.navigate('homePage', {
            trigger: true
        });
        console.log('search profile router triggering')
    }


});