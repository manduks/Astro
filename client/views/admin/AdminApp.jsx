AdminApp = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History],
  getMeteorData () {
    var sub = Meteor.subscribe("users");
    return {
      usersLoader: !sub.ready()
    }
  },
  render() {
    if (!Meteor.user()) {
      return <Loader></Loader>
    }
    return (
      <section className="astro_main_container">
        Admin
      </section>
    )
  }
});
