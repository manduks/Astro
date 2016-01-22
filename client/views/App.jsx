App = React.createClass({
  mixins: [ReactRouter.History],
  onCourseDoubleClick() {
    this.history.pushState(null, '/lessons');
  },
  render() {
    return (
      <section className="astro_main_container">
        <CoursesList onCourseDoubleClick={this.onCourseDoubleClick}/>
      </section>
    )
  }
});
