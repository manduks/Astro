LessonsLayout = React.createClass({
  mixins: [Utils, ReactMeteorData],
  getMeteorData () {
    let sub = Meteor.subscribe("courses"),
        courseId = this.props.params && this.props.params.courseId;
    return {
      course: Courses.find({_id: courseId}).fetch()[0],
      loadingCourse: !sub.ready(),
      user : Session.get('currentUser')
    }
  },
  render() {
    const course = this.data.course || {},
          lessons = (course && course.lessons) || [];

    if (this.loadingCourse || !this.data.user) {
      return <Loader></Loader>
    }
    if (course) {
      Session.set('currentCourse', course);
    }
    return (
      <section className="astro_main_container">
        <div className="astro_lessons_layout">
          <aside className="astro_lesson_course_info">
            <div className="astro_lesson_course_info_container">
              <span className="astro_lesson_course_info_container_title">{course.title} </span>
              <p>{course.description}</p>
              <span className="astro_lesson_course_info_container_duration"></span>
              <span className="astro_lesson_course_info_container_duration">{this.getCourseDuration(lessons)}&nbsp;min</span>
              <div className="astro_lesson_course_info_container_price">{this.formatPrice(course)}</div>
            </div>
          </aside>
          <LessonsList isAdmin={this.props.isAdmin} lessons={lessons}/>
        </div>
      </section>
    )
  }
});
