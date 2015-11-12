App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    var sub = Meteor.subscribe("users");
    return {
      currentUser: Meteor.user(),
      usersLoading: !sub.ready()
    }
  },
  render() {
    // Show a loading indicator if data is not ready
    if (this.data.usersLoading) {
      return <div></div>;
    }
    console.log(this.data);
    return (
      <div className="astro_main_content">
        <Toolbar avatar={this.data.currentUser.avatar}/>
        <section className="astro_main_container">
          <CoursesList/>
        </section>
      </div>
    )
  }
});
