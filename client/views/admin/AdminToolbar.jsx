AdminToolbar = React.createClass({
  render() {
    return (
      <header className="admin_astro_toolbar">
        {this.props.children}
      </header>
    )
  }
});
