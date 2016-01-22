Modal = React.createClass({
  mixins: [Utils],
  propTypes: {
    width : React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  },
  render() {
    var style = this.props.style || [];

    style['width'] = this.props.width;
    style['height'] = this.props.height;
    style['marginLeft'] = -(this.props.width / 2); /* half of the width  */
    style['marginTop']  = -(this.props.height / 2); /* half of the height */

    return (
      <dialog style={style}>  </dialog>
    )
  },
  handleOnClick() {
    this.hideModal()
  }
});
