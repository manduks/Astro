CourseItem = React.createClass({
  render() {
    return (
      <div className="astro_course_item_wrapper">
        <div className="astro_course_item_info">
          <strong className="astro_course_item_title">{this.props.course.title}</strong>
          <section className="astro_course_item_bottom_info">
            <span className="astro_course_item_bottom_info_lessons"><img src="img/lessons.png"></img>{this.props.course.lessons}</span>
            <span className="astro_course_item_bottom_info_duration"><img src="img/clock.png"></img>{this.props.course.totalTime}</span>
          </section>
        </div>
        <div className="astro_course_item_img">
          <img src={this.props.course.image}></img>
        </div>
      </div>
    )
  }
});
