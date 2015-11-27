LessonsLayout = React.createClass({
  render() {
    return (
      <section className="astro_main_container">
        <div className="astro_lessons_layout">
          <aside className="astro_lesson_course_info">
            <div className="astro_lesson_course_info_container">
              <span className="astro_lesson_course_info_container_title">REACT</span>
              <p>Aprende los principios basicos de esta asombrosa libreria</p>
              <span className="astro_lesson_course_info_container_duration">1hr 30 min</span>
            </div>
          </aside>
          <LessonsList/>
        </div>
      </section>
    )
  }
});
