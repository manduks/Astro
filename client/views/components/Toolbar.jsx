Toolbar = React.createClass({
  propTypes: {
    avatar : React.PropTypes.string.isRequired
  },
  render() {
    return (
      <header className="astro_toolbar">
        <div className="astro_toolbar-inner">
            <div className="astro_toolbar_brand">
              <span className="astro_toolbar_options_menu"><img src="img/menu.png"></img></span>
              <span className="astro_toolbar_name" onClick={this.props.onAppIndex}>CODETLAN</span>
            </div>
            <span className="astro_toolbar_logo" onClick={this.props.onAppIndex}><img src="img/logo.png"></img></span>
            <div className="astro_toolbar_options">
              <span className="astro_toolbar_options_search"><img src="img/search.png"></img></span>
              <span className="astro_toolbar_options_avatar">
                  <img src={this.props.avatar}></img>
                  <ul>
                    <li onClick={this.props.onProfile}>Perfil</li>
                    <li onClick={this.props.onLogout}>Cerrar Sesión </li>
                  </ul>
              </span>
            </div>
        </div>
      </header>
    )
  }
});
