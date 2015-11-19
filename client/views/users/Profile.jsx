Profile = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    var sub = Meteor.subscribe("users");
    return {
      currentUser    : Meteor.user(),
      usersLoader   : !sub.ready()
    }
  },
  updateUserData (e) {
    e.preventDefault();
    if (this.refs.userNameInput.value && this.refs.emailInput.value) {
      Meteor.call('updateUserProfile', {
            name : this.refs.userNameInput.value,
            email: this.refs.emailInput.value
        });
    }
  },
  render() {
    var user = this.data.currentUser;
    if (this.data.usersLoader) {
      return <Loader></Loader>;
    }
    return (
      <div className="astro_user_profile">
        <form className ="astro_user_profile_content" onSubmit={this.updateUserData}>
            <div className ="astro_user_profile_avatar">
              <img src={user.avatar}></img>
            </div>
            <div className="astro_user_profile_content_textfield user_name">
              <input type="text" name="userName" ref="userNameInput"  defaultValue={user.name} autoComplete="off" placeholder="Nombre completo" required/>
            </div>
            <div className="astro_user_profile_content_textfield email">
              <input  type="email" ref="emailInput" name="email" defaultValue={user.email} autoComplete="off" placeholder="Correo electrónico"  required/>
            </div>
            <input type="submit" className="astro_button large" value= "Guardar"/>
        </form>
      </div>
    )
  }
});
