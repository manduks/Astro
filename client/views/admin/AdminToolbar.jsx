AdminToolbar = React.createClass({
  render() {
    return (
      <header className="admin_astro_toolbar">
          <Button size="small" text={this.props.buttonText} onClick={this.props.buttonAction}/>
      </header>
    )
  }
});
