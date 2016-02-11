Meteor.publish('users', function () {
    return Meteor.users.find({});
});
Meteor.methods({
  updateUserProfile: function(userData) {
    return Meteor.users.update({
      _id: Meteor.userId()
    },{
      $set: {
        email: userData.email,
        name : userData.name
      }
    });
  },
  ownsNewCourse: function(id) {
    return Meteor.users.update({
      _id : Meteor.userId()
    },{
      $push: {courses: id}
    });
  }
});
