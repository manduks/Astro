Meteor.publish('courses', function () {
    return Courses.find({});
});

Meteor.methods({
  addCourse: function(data) {
    return Courses.insert(data);
  }
});
