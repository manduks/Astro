CoursesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    var sub = Meteor.subscribe("courses");
    return {
      courses       : Courses.find().fetch(),
      loadingCourses: !sub.ready()
    }
  },
  render() {
    if (this.loadingCourses) {
      return <Loader></Loader>
    }
    return (
      <div className="astro_courses_list">
        {this.data.courses.map(function (course) {
            return <CourseItem  key={course._id} course={course} onCourseDoubleClick={this.onCourseDoubleClick.bind(this, course)}/>;
      }, this)}
      </div>
    )
  },
  onCourseDoubleClick(course) {
    Session.set('currentCourse', course);
    return this.props.onCourseDoubleClick && this.props.onCourseDoubleClick();
  }
});
