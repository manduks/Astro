Login = React.createClass({
  render() {
    return (
      <div className="astro_login">
          <img src="img/logo-medium.png"></img>
          <h2>CODETLAN</h2>

          <section className="github">
            <Button size="large" text="Github"/>
          </section>
          <section className="twitter">
            <Button size="large" text="Twitter"/>
          </section>
      </div>
    )
  }
});
