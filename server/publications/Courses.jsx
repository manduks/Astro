Meteor.publish('courses', function () {
    return Courses.find({});
});

Meteor.methods({
  addCourse(data) {
    var id = data._id;
    delete data._id;
    return Courses.update({_id : id},data,{upsert: true});
  },
  addLesson(data) {
    var id = data.courseId;
    delete data.courseId;
    return Courses.update({
      _id : id
    },{
      $push: {lessons: data}
    },{upsert: true});
  }
});
