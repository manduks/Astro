CoursesList = React.createClass({
  getInitialState() {
    return {
      courses: [{
          title:'ES2015, Aprende la versión mas actual de JavaScript',
          lessons:10,
          totalTime: '1hr 20 min',
          image: 'img/es6.png'
      },{
          title:'JS, Aprende y domina el lenguaje que esta cambiando al mundo.',
          lessons:15,
          totalTime: '2hr 5 min',
          image: 'img/js.png'
      },{
          title:'React,  Aprende los principios basicos de esta asombrosa libreria.',
          lessons:8,
          totalTime: '1hr 30 min',
          image: 'img/react.png'
      },{
          title:'MeteorJS, Crea tu primer applicación lista para producción.',
          lessons:11,
          totalTime: '1hr 20 min',
          image: 'img/meteor.png'
      },{
          title:'ES2015, Aprende la versión mas actual de JavaScript',
          lessons:101,
          totalTime: '1hr 20 min',
          image: 'img/es6.png'
      },{
          title:'JS, Aprende y domina el lenguaje que esta cambiando al mundo.',
          lessons:152,
          totalTime: '2hr 5 min',
          image: 'img/js.png'
      },{
          title:'React,  Aprende los principios basicos de esta asombrosa libreria.',
          lessons:88,
          totalTime: '1hr 30 min',
          image: 'img/react.png'
      },{
          title:'MeteorJS, Crea tu primer applicación lista para producciónnnnn.',
          lessons:111,
          totalTime: '1hr 20 min',
          image: 'img/meteor.png'
      }]
    };
  },
  render() {
    return (
      <div className="astro_courses_list">
        {this.state.courses.map(function (course) {
            return <CourseItem  key={course.lessons} course={course}/>;
      }, this)}
      </div>
    )
  }
});
