App = React.createClass({
  render() {
    return (
      <div className="astro_main_content">
        <Toolbar/>
        <section className="astro_main_container">
          <CoursesList/>
        </section>
      </div>
    )
  }
});
