CommentsList = React.createClass({
  render() {
    return (
      <section className="astro_comments_list">
        {this.props.comments.map(function (comment) {
            return <CommentItem  key={comment._id} comment={comment}/>;
      }, this)}
      <span className="astro_comments_load_more">
        CARGAR MAS COMENTARIONS ...
      </span>
    </section>
    )
  }
});
