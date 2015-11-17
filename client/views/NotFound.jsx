NotFound = React.createClass({
  mixins : [ReactRouter.History],
  render() {
    return (
      <div onClick={this.handleBack}>
        Not Found
      </div>
    )
  },
  handleBack() {
    this.history.pushState(null, '/app');
  }
});
