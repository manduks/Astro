Meteor.publish('courses', function () {
    return Courses.find({
      deleted: false
    });
});

Meteor.methods({
  addCourse(data) {
    var id = data._id;
    delete data._id;
    data.deleted =  false;
    return Courses.update({_id : id},data,{upsert: true});
  },
  deleteCourse(data) {
    var id = data._id;
    delete data._id;
    return Courses.update({_id : id},{$set: {deleted: true}});
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
  },
  deleteLesson(data) {
    var id = data.courseId;
    delete data.courseId;
    console.log(data);
    return Courses.update({
      _id            : id
    },{
      $pull: { lessons: {_id: data._id}}
    });
  }
});
