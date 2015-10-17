App = React.createClass({
  render() {
    return (
      <div>
        <Toolbar/>
        <section className="astro_main_container">
          <CoursesList/>
        </section>
      </div>
    )
  }
});
