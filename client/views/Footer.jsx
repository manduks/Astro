Footer = React.createClass({
  onClickTwitter() {
    window.open('https://twitter.com/codetlan','_blank');
  },
  render() {
    return (
      <div className="astro_footer">
        <section>
          <div>
            <img src="http://107.170.231.59/img/logo.png"></img>
            <span>CODETLAN</span>
          </div>
          <div>
            <img src="http://107.170.231.59/img/twitter.png" onClick={this.onClickTwitter}></img>
            <span>© 2015 All rights reserved.</span>
          </div>
        </section>
      </div>
    )
  }
});
