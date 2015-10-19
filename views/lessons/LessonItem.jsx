LessonItem = React.createClass({
  render() {
    return (
      <div className="astro_lesson_item_wrapper">
        {this.props.lesson.title}
      </div>
    )
  }
});
