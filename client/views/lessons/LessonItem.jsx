LessonItem = React.createClass({
  mixins: [ReactMeteorData, Utils, ReactRouter.History],
  getMeteorData () {
    return {
      selectedLesson: Session.get('currentLesson'),
    }
  },
  onLessonDoubleClick() {
    if (this.props.lesson.order == 1){
      return this.props.onLessonDoubleClick();
    }
    if (this.ownsCourse(Session.get('currentCourse')) || Session.get('currentUser').isAdmin){
      return this.props.onLessonDoubleClick();
    }
    this.history.pushState(null, '/buy');
  },
  render() {
    const self = this;
    let classes = 'astro_lesson_item_wrapper';
    if (this.props.lesson && this.data.selectedLesson) {
      if (this.props.lesson._id === this.data.selectedLesson._id) {
          classes += ' item_selected';
      }
    }
    return (
      <div className={classes} onDoubleClick={this.onLessonDoubleClick} onClick={this.props.onLessonClick}>
        <section className="astro_lesson_item_wrapper-inner">
          <div className="astro_lesson_item_wrapper-inner-icon">
            <img src={this.props.lesson.icon}></img>
          </div>
          <div className="astro_lesson_item_wrapper-inner-info">
            <div className="astro_lesson_item_wrapper-inner-info-header">
              <span>{this.props.lesson.title}</span>
              <span>{this.props.lesson.duration}</span>
            </div>
            <strong className="astro_lesson_item_wrapper-inner-info-description">
              {this.props.lesson.description}
            </strong>
          </div>
        </section>
        <div className="astro_lesson_item_wrapper-img">
          <img src={this.props.lesson.imageFile}></img>
        </div>
      </div>
    )
  }
});
