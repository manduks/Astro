Landing = React.createClass({
  mixins: [Utils, ReactRouter.History],
  handleLogin() {
    var self = this;
    ReactUtils.render(
      <Login/>,
      self.getEl('dialog')
    );
    Meteor.setTimeout(function(){
      self.showModal();
    }, 100);
  },
  render() {
    return (
        <main>
            <header className="astro_header">
              <section>
                <span className="astro_legend">APRENDE LAS MEJORES LIBRERÍAS</span>
                <Button size="large" text="Entrar" onClick={this.handleLogin}/>
                <div className="astro_techs">
                  <img src="img/techs.png" alt="liberías"></img>
                </div>
              </section>
            </header>
            <section className="astro_main_container">
              <CoursesList onCourseDoubleClick={this.onCourseDoubleClick}/>
            </section>
        </main>
    )
  }
});
