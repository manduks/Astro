CommentsList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var sub = Meteor.subscribe("comments");
    return {
      comments: Comments.find({
        sourceId : this.props.lessonId
      }).fetch(),
      loadingComments: !sub.ready()
    }
  },
  render() {
    if (this.loadingComments) {
      return <Loader></Loader>
    }
    return (
      <section className="astro_comments_list">
        {this.data.comments.map(function (comment) {
            return <CommentItem  key={comment._id} comment={comment}/>;
      }, this)}
      <span className="astro_comments_load_more">
        CARGAR MAS COMENTARIONS ...
      </span>
    </section>
    )
  }
});
