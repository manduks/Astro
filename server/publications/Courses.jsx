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
    });
  },
  updateLesson(data) {
    var id = data.courseId;
    delete data.courseId;
    return Courses.update({
      _id            : id,
      'lessons._id'  : data._id
    },{
      $set: {
        'lessons.$.title'      : data.title.trim(),
        'lessons.$.description': data.description.trim(),
        'lessons.$.order'      : data.order.trim(),
        'lessons.$.duration'   : data.duration.trim(),
        'lessons.$.imageFile'  : data.imageFile,
        'lessons.$.videoFile'  : data.videoFile
      }
    });
  }
});
