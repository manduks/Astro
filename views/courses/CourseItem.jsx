CourseItem = React.createClass({
  render() {
    return (
      <div className="astro_course_item_wrapper">
        <div className="astro_course_item_info">
          <span className="astro_course_item_title">{this.props.course.title}</span>
          <section className="astro_course_item_bottom_info">
            <span>{this.props.course.lessons}</span>
            <span>{this.props.course.totalTime}</span>
          </section>
        </div>
        <div className="astro_course_item_img">
          <img src={this.props.course.image}></img>
        </div>
      </div>
    )
  }
});
