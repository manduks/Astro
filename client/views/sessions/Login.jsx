Login = React.createClass({
  mixins: [Utils],
  render() {
    return (
      <div className="astro_login">
        <h2>CODETLAN</h2>
        <img src="http://107.170.231.59/img/logo-medium.png"></img>
        <h2>INICIAR SESIÓN</h2>
        <section className="github">
          <Button size="large" text="Github" onClick={this.loginWithGithub}/>
        </section>
        <section className="twitter">
          <Button size="large" text="Twitter" onClick={this.loginWithTwitter}/>
        </section>
      </div>
    )
  },
  loginWithGithub() {
    Meteor.loginWithGithub({requestPermissions: ['user', 'email']}, this.login);
  },
  loginWithTwitter() {
    Meteor.loginWithTwitter({}, this.login);
  },
  login(err) {
    if (err){
      return console.log(err);
    }
    this.hideModal();
    this.history().pushState(null, '/app');
  }
});
