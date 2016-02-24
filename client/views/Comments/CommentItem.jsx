CommentItem = React.createClass({
  componentDidMount() {
    linkifyElement(this.refs.commentText);
  },
  render() {
    const user = this.props.comment.user;
    return (
      <div className="astro_comment_item_wrapper">
        <div className="astro_comment_item_wrapper_avatar">
          <img src={user.avatar}></img>
        </div>
        <div className="astro_comment_item_wrapper_info">
          <span>{user.name}</span>
          <span ref="commentText">{this.props.comment.text}</span>
        </div>
        <div className="astro_comment_item_wrapper_timestamps">
          <section>
            <img src="http://107.170.231.59/img/clock.png"></img>
            <span>{moment(this.props.comment.createdAt).fromNow()}</span>
          </section>
        </div>
      </div>
    )
  }
});
