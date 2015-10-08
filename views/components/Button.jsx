Button = React.createClass({
  propTypes: {
    size: React.PropTypes.oneOf(['small', 'medium', 'large']),
    text: React.PropTypes.string.isRequired,
  },
  render() {
    var className = "astro_button " + this.props.size
    return (
      <div className={className} style={this.props.style} onClick={this.props.handleOnClick}>
          <span>{this.props.text}</span>
      </div>
    )
  }
});
