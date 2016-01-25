AdminApp = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History],
  getMeteorData () {
    var sub = Meteor.subscribe('users');
    return {
      usersLoader: !sub.ready()
    }
  },
  addButtonHandler () {
    Session.set('currentCourse', undefined);
    this.history.pushState(null, '/admin/addCourse');
  },
  deleteButtonHandler () {
    const currentCourse = Session.get('currentCourse') || {};
    Meteor.call('deleteCourse', {
      _id        : currentCourse._id
    }, function () {
       Session.set('currentCourse', undefined);
    });
  },
  onCourseDoubleClick() {
    this.history.pushState(null, '/admin/lessons/' + Session.get('currentCourse')._id);
  },
  render () {
    if (!Meteor.user()) {
      return <Loader></Loader>
    }
    return (
      <section className="astro_main_container">
        <AdminToolbar>
          <Button size="small" text="+ Agregar curso" onClick={this.addButtonHandler}/>
          <Button size="small" text="- Eliminar curso" onClick={this.deleteButtonHandler}/>
        </AdminToolbar>
        <CoursesList onCourseDoubleClick={this.onCourseDoubleClick}/>
      </section>
    )
  }
});
