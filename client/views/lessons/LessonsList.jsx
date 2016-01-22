LessonsList = React.createClass({
  getInitialState() {
    var course = Session.get('currentCourse') || {};
    return {
      lessons: course.lessons || []
    };
  },
  render() {
    return (
      <div className="astro_lessons_list">
        {this.state.lessons.map(function (lesson) {
          return <LessonItem  key={lesson.duration} lesson={lesson}/>;
        }, this)}
      </div>
    )
  }
});
