Authenticate = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History],
  getMeteorData () {
    var sub = Meteor.subscribe("users");
    return {
      isAuthenticated: Meteor.userId() !== null,
      currentUser: Meteor.user(),
      usersLoading: !sub.ready()
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
  onLogout () {
    Meteor.logout();
  },
  onProfile () {
    this.history.pushState(null, '/profile');
  },
  onAppIndex (){
    this.history.pushState(null, '/app');
  },
  render: function() {
    let avatar =  (this.data.currentUser && this.data.currentUser.avatar) || '';
    return (
      <div className="astro_main_content">
        <Toolbar avatar={avatar} onLogout={this.onLogout} onProfile={this.onProfile} onAppIndex={this.onAppIndex}/>
        {this.props.children}
      </div>
    );
  }
});
