AdminLessons = React.createClass({
  render() {
    return (
      <section className="astro_main_container">
        <AdminToolbar buttonText="+ Agregar Lección" buttonAction={this.addButtonHandler}/>
        <LessonsList/>
      </section>
    )
  }
});
