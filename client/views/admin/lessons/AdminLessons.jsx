AdminLessons = React.createClass({
  mixins: [ReactRouter.History],
  addButtonHandler (){
    this.history.pushState(null, '/admin/addLesson');
  },
  editButtonHandler () {
    this.history.pushState(null, '/admin/addCourse');
  },
  render() {
    return (
      <section className="astro_main_container">
          <AdminToolbar>
            <Button size="small" text="+ Agregar lección" onClick={this.addButtonHandler}/>
            <Button size="small" text="+ Editar lección" onClick={this.editButtonHandler}/>
          </AdminToolbar>
        <LessonsLayout/>
      </section>
    )
  }
});
