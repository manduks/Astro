CourseItem = React.createClass({
  mixins: [ReactMeteorData, Utils],
  getMeteorData () {
    return {
      selectedCourse: Session.get('currentCourse'),
    }
  },
  render() {
    const self = this,
          price = this.props.course.price ?  '$' + this.props.course.price + 'MXN': 'FREE';
    let classes = 'astro_course_item_wrapper',
        lessons = (this.props.course && this.props.course.lessons) || [],
        duration = 0;
    if (this.props.course && this.data.selectedCourse) {
      if (this.props.course._id === this.data.selectedCourse._id) {
          classes += ' item_selected';
      }
    }
    return (
      <div className={classes} onDoubleClick={this.props.onCourseDoubleClick} onClick={this.props.onCourseClick}>
        <div className="astro_course_item_info">
          <strong className="astro_course_item_title">{this.props.course.title + ', ' + this.props.course.description}</strong>
          <section className="astro_course_item_bottom_info">
            <span className="astro_course_item_bottom_info_lessons"><img src="http://localhost:3000/img/lessons.png"></img>{lessons.length}</span>
            <span className="astro_course_item_bottom_info_duration"><img src="http://localhost:3000/img/clock.png"></img>{this.getCourseDuration(lessons)}&nbsp;min</span>
          </section>
        </div>
        <div className="astro_course_item_img">
          <div className="ribbon-wrapper"><div className="ribbon">{price}</div></div>
          <img src={this.props.course.image}></img>
        </div>
      </div>
    )
  }
});
