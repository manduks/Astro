Toolbar = React.createClass({
  mixins: [ReactRouter.History],
  propTypes: {
    avatar    : React.PropTypes.string.isRequired,
    isAdmin   : React.PropTypes.bool.isRequired
  },
  onLogout () {
    var self = this;
    Meteor.logout();
  },
  onProfile () {
    this.history.pushState(null,'/profile');
  },
  onTOS () {
    this.history.pushState(null,'/tos');
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
              {/* <span className="astro_toolbar_options_menu"><img src="http://localhost:3000/img/menu.png"></img></span>*/}
              <span className="astro_toolbar_name" onClick={this.onAppIndex}>CODETLAN</span>
            </div>
            <span className="astro_toolbar_logo" onClick={this.onAppIndex}><img src="http://localhost:3000/img/logo.png"></img></span>
            <div className="astro_toolbar_options">
              {/* <span className="astro_toolbar_options_search"><img src="http://localhost:3000/img/search.png"></img></span>*/}
              <span className="astro_toolbar_options_avatar">
                  <img src={this.props.avatar}></img>
                  <ul>
                    <li onClick={this.onProfile}>Perfil</li>
                    {addAdminMenu(this.props.isAdmin)}
                    <li onClick={this.onTOS}>Términos y condiciones</li>
                    <li onClick={this.onLogout}>Cerrar Sesión</li>
                  </ul>
              </span>
            </div>
        </div>
      </header>
    )
  }
});
