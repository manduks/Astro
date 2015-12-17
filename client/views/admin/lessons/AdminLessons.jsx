AdminLessons = React.createClass({
  mixins: [ReactRouter.History],
  render() {
    return (
      <section className="astro_main_container">
        <AdminToolbar buttonText="+ Agregar Lección" buttonAction={this.addButtonHandler}/>
        <LessonsList/>
      </section>
    )
  },

  addButtonHandler (){
    this.history.pushState(null, "/admin/addLesson");
  }
});
