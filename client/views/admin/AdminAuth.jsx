AdminAuth = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History],
  getMeteorData () {
    var sub = Meteor.subscribe("users");
    return {
      currentUser : Meteor.user(),
      usersLoading: !sub.ready()
    }
  },
  componentWillMount () {
    var isAdmin = this.data.currentUser && this.data.currentUser.isAdmin;
    if (!isAdmin) {
      this.history.pushState(null, '/app');
      //this.history.goBack();
    }
  },
  componentDidUpdate (prevProps, prevState) {
    var isAdmin = this.data.currentUser && this.data.currentUser.isAdmin;
    if (!isAdmin) {
      this.history.pushState(null, '/app');
      //this.history.goBack();
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
