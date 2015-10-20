LessonItem = React.createClass({
  render() {
    return (
      <div className="astro_lesson_item_wrapper">
        <section className="astro_lesson_item_wrapper-inner">
          <div className="astro_lesson_item_wrapper-inner-icon">
            <img src={this.props.lesson.icon}></img>
          </div>
          <div className="astro_lesson_item_wrapper-inner-info">
            <div className="astro_lesson_item_wrapper-inner-info-header">
              <span>{this.props.lesson.title}</span>
              <span>{this.props.lesson.duration}</span>
            </div>
            <span className="astro_lesson_item_wrapper-inner-info-description">
              {this.props.lesson.description}
            </span>
          </div>
        </section>
        <div className="astro_lesson_item_wrapper-img">
          <img src={this.props.lesson.image}></img>
        </div>
      </div>
    )
  }
});