LessonsLayout = React.createClass({
  mixins: [Utils],
  render() {
    const course = Session.get('currentCourse') || {},
          lessons = (course && course.lessons) || [];

    return (
      <section className="astro_main_container">
        <div className="astro_lessons_layout">
          <aside className="astro_lesson_course_info">
            <div className="astro_lesson_course_info_container">
              <span className="astro_lesson_course_info_container_title">{course.title}</span>
              <p>Aprende los principios basicos de esta asombrosa libreria</p>
              <span className="astro_lesson_course_info_container_duration">{this.getCourseDuration(lessons)}&nbsp;min</span>
            </div>
          </aside>
          <LessonsList isAdmin={this.props.isAdmin}/>
        </div>
      </section>
    )
  }
});
