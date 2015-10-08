Landing = React.createClass({
  render() {
    return (
      <div>
          <header className="astro_header">
            <section>
              <span className="astro_legend">APRENDE LAS MEJORES LIBRERÍAS</span>
              <Button size="large" text="Entrar"/>
              <div className="astro_techs">
                <img src="img/techs.png" alt="liberías"></img>
              </div>
            </section>
          </header>
          <section>
            <CoursesList/>
          </section>
      </div>
    )
  }
});
/*
<Button size="large"/>
<Button size="small"/>
<Button size="medium" style={{backgroundColor:'#000'}}/>
*/
