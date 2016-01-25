Commentform = React.createClass({
  mixins: [Utils, React.addons.LinkedStateMixin, ReactMeteorData],
  getMeteorData () {
    var sub = Meteor.subscribe("users");
    return {
      currentUser    : Meteor.user(),
      loadingUser   : !sub.ready()
    }
  },
  getInitialState() {
    return {
      comment: ''
    };
  },
  addComment(e){
    const lesson = Session.get('currentLesson') || {};

    e.preventDefault();
    this.showOperationSpinner();

    Meteor.call('addComment', {
      _id       : Random.id(),
      text      : this.state.comment.trim(),
      sourceId  : lesson._id,
      sourceType: 'comments',
    }, this.afterSaveComment);
  },
  afterSaveComment(){
    this.hideOperationSpinner();
    this.refs.commentInput.value = '';
  },
  render() {
    var user = this.data.currentUser;
    if (this.data.loadingUser) {
      return <Loader></Loader>
    }
    return (
      <form className="astro_comments_form" onSubmit={this.addComment}>
        <div className="astro_comments_form_avatar">
          <img src={user.avatar}></img>
        </div>
        <div className="astro_comments_form_textfield">
          <input ref="commentInput" type="text" valueLink={this.linkState('comment')} name="comment" required/>
        </div>
        <input type="submit" className="astro_button medium" value="Enviar"/>
      </form>
    )
  }
});
