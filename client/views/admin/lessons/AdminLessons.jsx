AdminLessons = React.createClass({
  mixins: [ReactRouter.History],
  addButtonHandler (){
    Session.set('currentLesson', undefined);
    this.history.pushState(null, '/admin/addLesson');
  },
  deleteButtonHandler () {
    const currentLesson = Session.get('currentLesson') || {};
    currentLesson.courseId = Session.get('currentCourse') && Session.get('currentCourse')._id;
    Meteor.call('deleteLesson', currentLesson, function () {
       Session.set('currentLesson', undefined);
    });
  },
  render() {
    return (
      <section className="astro_main_container">
          <AdminToolbar>
            <Button size="small" text="+ Agregar lección" onClick={this.addButtonHandler}/>
            <Button size="small" text="- Eliminar lección" onClick={this.deleteButtonHandler}/>
          </AdminToolbar>
        <LessonsLayout isAdmin={true} params={this.props.params}/>
      </section>
    )
  }
});
