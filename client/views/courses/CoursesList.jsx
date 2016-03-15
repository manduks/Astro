CoursesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    var sub = Meteor.subscribe("courses");
    return {
      courses       : Courses.find({},{sort: {createdAt: -1}}).fetch(),
      loadingCourses: !sub.ready()
    }
  },
  onCourseDoubleClick(course) {
    Session.set('currentCourse', course);
    return this.props.onCourseDoubleClick && this.props.onCourseDoubleClick();
  },
  onCourseClick(course) {
    Session.set('currentCourse', course);
    return this.props.onCourseDoubleClick && this.props.onCourseDoubleClick();
  },
  render() {
    const courses = this.data.courses || [];
    if (this.loadingCourses || !courses.length) {
      return <Loader></Loader>
    }
    return (
      <div className="astro_courses_list">
        {courses.map(function (course) {
            return <CourseItem  key={course._id} course={course} onCourseDoubleClick={this.onCourseDoubleClick.bind(this, course)} onCourseClick={this.onCourseClick.bind(this, course)}/>;
      }, this)}
      </div>
    )
  }
});
