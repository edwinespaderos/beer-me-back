console.log('\'Allo \'Allo!');

/* off-canvas sidebar toggle */

// $('[data-toggle=offcanvas]').click(function() {
//     $(this).toggleClass('visible-xs text-center');
//     $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
//     $('.row-offcanvas').toggleClass('active');
//     $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
//     $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
//     $('#btnShow').toggle();
// });




$(function() {

 
  Parse.initialize("3JhBshjHS92v35S1uFXDxuHnz4OPZ3PErqgKcME8", "Ln1j6vI5xZg4iwkM8FcRTl4Ry7Ilj8bmzSkiIU1z");

  window.router = new MainRouter();
  Backbone.history.start();

});


//           var Favors = Parse.Collection.extend ({
//             url: '/favors'
//           });

//           var FavorList = Backbone.View.extend({
//             el: '.favor-list',
//             render: function() {
//               var that = this;
//               var favors = new Favors();
//               favors.fetch({
//                 success: function(){
//                   this.$el.html('!Content Should Render Here!');
//                   console.log("success!")
//                 },
//                 error: function(error){
//                   console.log("Broke ass app");
//                 }
//               });
//             }
//           });

//           var Router = Backbone.Router.extend({
//             routes: {
//               '' : 'home'
//               }
//           });

//           favorList = new FavorList();

//           router = new Router();
//           router.on('route:home', function(){
//             favorList.render();
//           });

//           Backbone.history.start();















// // Sign Up

// $(document).ready(function(){
// $("#signup-form").submit(function(e){
// e.preventDefault();
// saveUser();
// })
// })

// function saveUser() {

// var user = new Parse.User();

// var userName = $('#signupusername').val();
// var userPassword = $('#signuppassword').val();
// var userEmail = $('#signupemail').val();

// user.set("username", userName);
// user.set("email", userEmail); 
// user.set("password", userPassword);


// user.signUp(null, {
//   success: function(user) {
//     // Hooray! Let them use the app now.
//   },
//   error: function(user, error) {
//     // Show the error message somewhere and let the user try again.
//     alert("Error: " + error.code + " " + error.message);
//   }
// });

// }




// // Log In


// $(document).ready(function(){
// $("#signin-form").submit(function(e){
// e.preventDefault();
// loginUser();
// })
// });



// function loginUser() {

// var self = this;
// var username = this.$('#signin').val();
// var password = this.$('#signinpw').val();

// Parse.User.logIn(username, password, {
//   success: function(user) {
//     // Do stuff after successful login.
//   },
//   error: function(user, error) {
//     // The login failed. Check error to see why.
//   }
// });

// }


// var currentUser = Parse.User.current();
// console.log(currentUser.attributes.username);



// $(".js-signout").click(function(){
// currentUser = Parse.User.logOut();
// });

