AdminLessons = React.createClass({
  mixins: [ReactRouter.History],
  addButtonHandler (){
    Session.set('currentLesson', undefined);
    this.history.pushState(null, '/admin/addLesson');
  },
  editButtonHandler () {
    this.history.pushState(null, '/admin/addLesson');
  },
  render() {
    return (
      <section className="astro_main_container">
          <AdminToolbar>
            <Button size="small" text="+ Agregar lección" onClick={this.addButtonHandler}/>
            <Button size="small" text="+ Editar lección" onClick={this.editButtonHandler}/>
          </AdminToolbar>
        <LessonsLayout isAdmin={true} params={this.props.params}/>
      </section>
    )
  }
});
