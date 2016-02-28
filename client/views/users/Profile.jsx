Profile = React.createClass({
  mixins: [ReactMeteorData, Utils, ReactRouter.History],
  getMeteorData () {
    var sub = Meteor.subscribe("users");
    return {
      currentUser    : Meteor.user(),
      usersLoader   : !sub.ready()
    }
  },
  updateUserData (e) {
    const self = this;
    e.preventDefault();
    if (self.refs.userNameInput.value && self.refs.emailInput.value) {
      self.showOperationSpinner();
      Meteor.call('updateUserProfile', {
            name : self.refs.userNameInput.value,
            email: self.refs.emailInput.value
        }, function () {
            self.hideOperationSpinner();
        });
    }
  },
  onTOS () {
    this.history.pushState(null,'/tos');
  },
  render() {
    var user = this.data.currentUser;
    if (this.data.usersLoader) {
      return <Loader></Loader>;
    }
    return (
      <div className="astro_form_component">
        <form className ="astro_form_component_content" onSubmit={this.updateUserData}>
            <div className ="astro_form_component_avatar">
              <img src={user.avatar}></img>
            </div>
            <div className="astro_form_component_content_textfield user_name">
              <input type="text" name="userName" ref="userNameInput"  defaultValue={user.name} autoComplete="off" placeholder="Nombre completo" required/>
            </div>
            <div className="astro_form_component_content_textfield email">
              <input  type="email" ref="emailInput" name="email" defaultValue={user.email} autoComplete="off" placeholder="Correo electrónico"  required/>
            </div>
            <input type="submit" className="astro_button large margin_top" value= "Guardar"/>
        </form>
        <span className="astro-tos" onClick={this.onTOS}>Términos y condiciones</span>
      </div>
    )
  }
});
