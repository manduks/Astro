Landing = React.createClass({
  mixins: [DOM],
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
              <CoursesList/>
            </section>
        </main>
    )
  },
  handleLogin() {
    var self = this;
    ReactDOM.render(
      <Login/>,
      self.getEl('dialog')
    );
    Meteor.setTimeout(function(){
      self.showModal();
    }, 100);
  }
});
