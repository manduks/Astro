Meteor.publish('courses', function () {
    return Courses.find({});
});

Meteor.methods({
  addCourse: function(data) {
    var id = data._id;
    delete data._id;
    return Courses.update({_id : id},data,{upsert: true});
  }
});
