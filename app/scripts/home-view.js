var HomeView = Parse.View.extend({
  
  renderTemplate: _.template($("#home-template").text()),

  // events: {
  //   "click .form-signin-heading": "email",
  //   "click .js-create": 
  // },

  initialize: function(){
    $(".wrapper").html(this.el)
    this.render()
  },

  render: function(){
    this.$el.html(this.renderTemplate())
    console.log("did this happen");
  }

  // email: function(){
  //   $('.email').addClass('active')
  //   $('.js-create').addClass('active')
  //   $('.js-signup').addClass('active')
  // },



});