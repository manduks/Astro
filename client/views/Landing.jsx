Landing = React.createClass({
  mixins: [Utils, ReactRouter.History],
  handleLogin() {
    var self = this;
    ReactDOM.render(
      <Login/>,
      self.getEl('dialog')
    );
    Meteor.setTimeout(function(){
      self.showModal();
    }, 100);
  },
  onCourseDoubleClick(){
    this.handleLogin();
  },
  componentDidMount() {
    if (Meteor.userId()) {
      this.history.pushState(null, '/app');
    }
  },
  render() {
    return (
        <main>
            <header className="astro_header">
              <section>
                <span className="astro_legend">APRENDE LAS MEJORES LIBRERÍAS</span>
                <Button size="large" text="Entrar" onClick={this.handleLogin}/>
                <div className="astro_techs">
                  <img src="http://localhost:3000/img/techs.png" alt="liberías"></img>
                </div>
              </section>
            </header>
            <section className="astro_main_container">
              <CoursesList onCourseDoubleClick={this.onCourseDoubleClick} onCourseClick={this.onCourseDoubleClick}/>
            </section>
        </main>
    )
  }
});
