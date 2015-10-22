CommentsList = React.createClass({
  getInitialState() {
    return {
      comments: [{
          user   : 'Mike Taylor',
          text   : 'Such a massive change in such a short time is extremely unusual.',
          avatar : 'img/es6.png',
          creationDate   : '3 de Abril, 1:22 pm'
      },{
          user   :' Sophia Anderson',
          text   : 'Loss of Arctic sea ice is just one of the many changes that are accelerating it.',
          avatar : 'img/es6.png',
          creationDate   : '3 de Abril, 1:22 pm'
      },{
          user   : 'Charlie Harris',
          text   : 'Perhaps they had the same thing in the early 20th century.',
          avatar : 'img/es6.png',
          creationDate   : '3 de Abril, 1:22 pm'
      }]
    };
  },
  render() {
    return (
      <section className="astro_comments_list">
        {this.state.comments.map(function (comment) {
            return <CommentItem  key={comment.lessons} comment={comment}/>;
      }, this)}
      <span className="astro_comments_load_more">
        CARGAR MAS COMENTARIONS ...
      </span>
    </section>
    )
  }
});
