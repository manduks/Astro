CommentItem = React.createClass({
  render() {
    return (
      <div className="astro_comment_item_wrapper">
        <div className="astro_comment_item_wrapper_avatar">
          <img src="http://localhost:3000/img//es6.png"></img>
        </div>
        <div className="astro_comment_item_wrapper_info">
          <span>{this.props.comment.user}</span>
          <span>{this.props.comment.text}</span>
        </div>
        <div className="astro_comment_item_wrapper_timestamps">
          <section>
            <img src="http://localhost:3000/img//clock.png"></img>
            <span>{this.props.comment.creationDate}</span>
          </section>
        </div>
      </div>
    )
  }
});
