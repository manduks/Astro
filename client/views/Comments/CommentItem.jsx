CommentItem = React.createClass({
  render() {
    const user = this.props.comment.user;
    return (
      <div className="astro_comment_item_wrapper">
        <div className="astro_comment_item_wrapper_avatar">
          <img src={user.avatar}></img>
        </div>
        <div className="astro_comment_item_wrapper_info">
          <span>{user.name}</span>
          <span>{this.props.comment.text}</span>
        </div>
        <div className="astro_comment_item_wrapper_timestamps">
          <section>
            <img src="http://localhost:3000/img/clock.png"></img>
            <span>{moment(this.props.comment.createdAt).fromNow()}</span>
          </section>
        </div>
      </div>
    )
  }
});
