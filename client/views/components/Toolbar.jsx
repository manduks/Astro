Toolbar = React.createClass({
  mixins: [ReactRouter.History],
  propTypes: {
    avatar    : React.PropTypes.string.isRequired,
    isAdmin   : React.PropTypes.bool.isRequired
  },
  onLogout () {
    var self = this;
    Meteor.logout(function (err) {
      if (err) {
        return console.log(err);
      }
      self.history.pushState(null,'/');
    });
  },
  onProfile () {
    this.history.pushState(null,'/profile');
  },
  onAppIndex (){
    this.history.pushState(null, '/app');
  },
  onAdmin (){
    this.history.pushState(null, '/admin');
  },
  render() {
    var addAdminMenu = (isAdmin) => isAdmin ? <li onClick={this.onAdmin}>Admin</li> : null;

    return (
      <header className="astro_toolbar">
        <div className="astro_toolbar-inner">
            <div className="astro_toolbar_brand">
              <span className="astro_toolbar_options_menu"><img src="img/menu.png"></img></span>
              <span className="astro_toolbar_name" onClick={this.onAppIndex}>CODETLAN</span>
            </div>
            <span className="astro_toolbar_logo" onClick={this.onAppIndex}><img src="img/logo.png"></img></span>
            <div className="astro_toolbar_options">
              <span className="astro_toolbar_options_search"><img src="img/search.png"></img></span>
              <span className="astro_toolbar_options_avatar">
                  <img src={this.props.avatar}></img>
                  <ul>
                    <li onClick={this.onProfile}>Perfil</li>
                    <li onClick={this.onLogout}>Cerrar Sesión</li>
                    {addAdminMenu(this.props.isAdmin)}
                  </ul>
              </span>
            </div>
        </div>
      </header>
    )
  }
});
