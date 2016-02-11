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

/* Model access/deny rules */
//only current users and admin can updates users
Meteor.users.deny({
  update: function(userId, doc, fields, modifier) {
    return userId !== doc.userId || !Meteor.user().isAdmin;
  }
});
