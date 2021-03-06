LessonsList = React.createClass({
  mixins: [ReactRouter.History],
  onLessonDoubleClick(lesson) {
    const route = this.props.isAdmin ? '/admin/addLesson' : '/video'
    Session.set('currentLesson', lesson);
    this.history.pushState(null, route);
  },
  onLessonClick(lesson) {
    Session.set('currentLesson', lesson);
    if (!this.props.isAdmin) {
      this.onLessonDoubleClick(lesson);
    }
  },
  render() {
    return (
      <div className="astro_lessons_list">
        {this.props.lessons.map(function (lesson) {
          return <LessonItem  key={lesson._id} lesson={lesson} onLessonDoubleClick={this.onLessonDoubleClick.bind(this, lesson)} onLessonClick={this.onLessonClick.bind(this, lesson)}/>;
        }, this)}
      </div>
    )
  }
});
