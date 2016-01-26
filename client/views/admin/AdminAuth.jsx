AdminAuth = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History],
  getMeteorData () {
    var sub = Meteor.subscribe("users");
    return {
      currentUser : Meteor.user(),
      usersLoader: !sub.ready(),
      isAuthenticated: Meteor.userId() !== null,
    }
  },
  componentWillMount () {
    var isAdmin = this.data.currentUser && this.data.currentUser.isAdmin;
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/');
    }
  },
  componentDidUpdate (prevProps, prevState) {
    var isAdmin = this.data.currentUser && this.data.currentUser.isAdmin;
    if (!isAdmin) {
      this.history.pushState(null, '/app');
    }
  },
  render: function() {
    let avatar =  (this.data.currentUser && this.data.currentUser.avatar) || '';
    let isAdmin =  (this.data.currentUser && this.data.currentUser.isAdmin) || false;

    if (this.usersLoader) {
      return <Loader></Loader>
    }
    Session.set('currentUser', this.data.currentUser);
    return (
      <div className="astro_main_content">
        <Toolbar avatar={avatar} isAdmin={isAdmin}/>
        {this.props.children}
      </div>
    );
  }
});
