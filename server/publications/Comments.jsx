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
    //data.text = data.text.autoLink();
    return Comments.insert(data);
  }
});
