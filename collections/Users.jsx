Meteor.methods({
  updateUserProfile: function (userData) {
    Meteor.users.update({
      _id: Meteor.userId()
    },{
      $set: {
        email: userData.email,
        name : userData.name
      }
    })
  }
});
