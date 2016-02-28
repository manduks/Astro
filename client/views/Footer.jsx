Footer = React.createClass({
  onClickTwitter() {
    window.open('https://twitter.com/codetlan','_blank');
  },
  render() {
    return (
      <div className="astro_footer">
        <section>
          <div>
            <img src="http://localhost:3000/img/logo.png"></img>
            <span>CODETLAN</span>
          </div>
          <div>
            <img src="http://localhost:3000/img/twitter.png" onClick={this.onClickTwitter}></img>
            <span>© 2016 Todos los derechos reservados.</span>
          </div>
        </section>
      </div>
    )
  }
});
