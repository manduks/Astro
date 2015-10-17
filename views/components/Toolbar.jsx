Toolbar = React.createClass({
  render() {
    return (
      <div className="astro_toolbar">
        <div className="astro_toolbar-inner">
            <div className="astro_toolbar_brand">
              <span className="astro_toolbar_options_menu"><img src="img/menu.png"></img></span>
              <span className="astro_toolbar_name">CODETLAN</span>
            </div>
            <span className="astro_toolbar_logo"><img src="img/logo.png"></img></span>
            <div className="astro_toolbar_options">
              <span className="astro_toolbar_options_search"><img src="img/search.png"></img></span>
              <span className="astro_toolbar_options_avatar"><img src="img/react.png"></img></span>
            </div>
        </div>
      </div>
    )
  }
});
