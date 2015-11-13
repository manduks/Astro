Profile = React.createClass({
  mixins: [DOM],
  render() {
    var user = Meteor.user();
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
