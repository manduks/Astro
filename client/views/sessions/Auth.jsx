Auth = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History],
  getMeteorData () {
    var sub = Meteor.subscribe("users");
    return {
      isAuthenticated: Meteor.userId() !== null,
      currentUser    : Meteor.user(),
      usersLoading   : !sub.ready()
    }
  },
  componentWillMount () {
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/');
    }
  },
  componentDidUpdate (prevProps, prevState) {
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/');
    }
  },
  render: function() {
    let avatar =  (this.data.currentUser && this.data.currentUser.avatar) || '';
    let isAdmin =  (this.data.currentUser && this.data.currentUser.isAdmin) || false;
    return (
      <div className="astro_main_content">
        <Toolbar avatar={avatar} isAdmin={isAdmin}/>
        {this.props.children}
      </div>
    );
  }
});
