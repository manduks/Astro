CourseItem = React.createClass({
  render() {
    return (
      <div className="astro_course_item_wrapper" onDoubleClick={this.props.onCourseDoubleClick}>
        <div className="astro_course_item_info">
          <strong className="astro_course_item_title">{this.props.course.title + ', ' + this.props.course.description}</strong>
          <section className="astro_course_item_bottom_info">
            <span className="astro_course_item_bottom_info_lessons"><img src="img/lessons.png"></img>{this.props.course.lessonsNumber}</span>
            <span className="astro_course_item_bottom_info_duration"><img src="img/clock.png"></img>{this.props.course.duration}</span>
          </section>
        </div>
        <div className="astro_course_item_img">
          <img src={this.props.course.image}></img>
        </div>
      </div>
    )
  }
});
