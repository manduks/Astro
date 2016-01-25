Meteor.publish('comments', function () {
    return Comments.find({
      deleted: false
    });
});

Meteor.methods({
  addComment(data) {
    data.deleted =  false;
    data.createdAt = new Date();
    data.user = Meteor.user();
    return Comments.insert(data);
  }
});
