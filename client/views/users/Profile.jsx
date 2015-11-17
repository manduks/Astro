Profile = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    var sub = Meteor.subscribe("users");
    return {
      currentUser    : Meteor.user(),
      usersLoader   : !sub.ready()
    }
  },
  render() {
    var user = this.data.currentUser;
    if (this.data.usersLoader) {
      return <Loader></Loader>;
    }
    return <Loader></Loader>;
    return (
      <div className="astro_user_profile">
        <section className ="astro_user_profile_content">
          <section className ="astro_user_profile_content">
            {user.profile.name}
          </section>
        </section>
      </div>
    )
  }
});
