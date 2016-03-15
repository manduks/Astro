App = React.createClass({
  mixins: [ReactRouter.History],
  onCourseDoubleClick() {
    this.history.pushState(null, '/lessons/'  + Session.get('currentCourse')._id);
  },
  componentDidMount() {
    Session.set('currentCourse', null)
  },
  render() {
    return (
      <section className="astro_main_container">
        <CoursesList onCourseDoubleClick={this.onCourseDoubleClick} onCourseClick={this.onCourseDoubleClick}/>
      </section>
    )
  }
});
