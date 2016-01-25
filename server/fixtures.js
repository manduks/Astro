if (Courses.find().count() === 0) {
  console.log('++++++++++++++++++++++++++++++++++++');
  console.log('INSERTING COURSES');
  var courses = [{
      title:'ES2015,',
      description: 'Aprende la versión mas actual de JavaScript',
      lessonsNumber:10,
      duration: '1hr 20 min',
      image: 'img/es6.png',
      deleted: false
  },{
      title:'JS',
      description: 'Aprende y domina el lenguaje que esta cambiando al mundo.',
      lessonsNumber:15,
      duration: '2hr 5 min',
      image: 'img/js.png',
      deleted: false
  },{
      title:'React',
      description: 'Aprende los principios basicos de esta asombrosa libreria.',
      lessonsNumber:8,
      duration: '1hr 30 min',
      image: 'img/react.png',
      deleted: false
  },{
      title:'MeteorJS',
      description: 'Crea tu primer applicación lista para producción.',
      lessonsNumber:11,
      duration: '1hr 20 min',
      image: 'img/meteor.png',
      deleted: false
  },{
      title:'ES2015',
      description: 'Aprende la versión mas actual de JavaScript',
      lessonsNumber:101,
      duration: '1hr 20 min',
      image: 'img/es6.png',
      deleted: false
  },{
      title:'JS',
      description: 'Aprende y domina el lenguaje que esta cambiando al mundo.',
      lessonsNumber:152,
      duration: '2hr 5 min',
      image: 'img/js.png',
      deleted: false
  },{
      title:'React',
      description: 'Aprende los principios basicos de esta asombrosa libreria.',
      lessonsNumber:88,
      duration: '1hr 30 min',
      image: 'img/react.png',
      deleted: false
  },{
      title:'MeteorJS',
      description: 'Crea tu primer applicación lista para producciónnnnn.',
      lessonsNumber:111,
      duration: '1hr 20 min',
      image: 'img/meteor.png',
      deleted: false
  }];

  courses.forEach(function (course) {
    course.lessons = [];
    Courses.insert(course);
  });
  console.log('FINISHED INSERTING COURSES');
  console.log('++++++++++++++++++++++++++++++++++++');
}
