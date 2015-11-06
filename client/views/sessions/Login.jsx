
Login = React.createClass({
  mixins: [DOM],
  render() {
    return (
      <div className="astro_login">
          <img src="img/logo-medium.png"></img>
          <h2>CODETLAN</h2>
          <section className="github">
            <Button size="large" text="Github" onClick={this.loginWithGithub}/>
          </section>
          <section className="twitter">
            <Button size="large" text="Twitter" onClick={this.loginWithTwitter}/>
          </section>
      </div>
    )
  },
  loginWithGithub (){
    var self = this;
    Meteor.loginWithGithub({
        requestPermissions: ['user', 'email']
    }, function (err) {
          if (err){
              return console.log(err);
          }
          self.hideModal()
          return self.history().pushState(null, "/app");
    });
  },
  loginWithTwitter (){
    alert('twitter');
  }
});
