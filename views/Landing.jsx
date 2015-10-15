Landing = React.createClass({
  mixins: [DOM],
  render() {
    return (
      <div>
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
            <section>
              <CoursesList/>
            </section>
        </main>
      </div>
    )
  },
  handleLogin() {
    React.render(
      <Login/>,
      this.getEl('dialog')
    );
     this.showModal()
  }
});
/*
<Button size="large"/>
<Button size="small"/>
<Button size="medium" style={{backgroundColor:'#000'}}/>
*/
