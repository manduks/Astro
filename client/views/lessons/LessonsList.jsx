LessonsList = React.createClass({
  getInitialState() {
    const course = Session.get('currentCourse') || {};
    return {
      lessons: course.lessons || []
    };
  },
  render() {
    return (
      <div className="astro_lessons_list">
        {this.state.lessons.map(function (lesson) {
          return <LessonItem  key={lesson.order} lesson={lesson}/>;
        }, this)}
      </div>
    )
  }
});
