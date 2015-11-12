App = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History],
  getMeteorData: function() {
    var sub = Meteor.subscribe("users");
    return {
      currentUser: Meteor.user(),
      usersLoading: !sub.ready()
    }
  },
  componentWillMount: function() {
    if (!this.data.currentUser) {
      this.history.pushState(null, '/');
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (!this.data.currentUser) {
      this.history.pushState(null, '/');
    }
  },
  render() {
    let avatar = null;
    if (this.data.usersLoading) {
      return <div></div>;
    }
    
    avatar =  (this.data.currentUser && this.data.currentUser.avatar) || '';
    
    return (
      <div className="astro_main_content">
        <Toolbar avatar={avatar} onLogout={this.onLogout}/>
        <section className="astro_main_container">
          <CoursesList/>
        </section>
      </div>
    )
  },
  onLogout: function  () {
    Meteor.logout();
  }
});
