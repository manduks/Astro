Comments = new Meteor.Collection('comments');
Comments.allow({
  update: isAdmin,
  remove: isAdmin,
  insert: function () {
    return !!this.userId;
  }
});
