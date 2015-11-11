Authenticate = React.createClass({
  mixins: [ReactMeteorData, ReactRouter.History],
  getMeteorData: function() {
    return {
      isAuthenticated: Meteor.userId() !== null
    }
  },
  componentWillMount: function() {
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/');
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/');
    }
  },
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
