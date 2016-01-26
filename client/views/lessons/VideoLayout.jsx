VideoLayout = React.createClass({
  mixins: [Utils, ReactMeteorData],
  getMeteorData() {
    var sub = Meteor.subscribe("comments"),
        limit = this.state.page * this.state.pageSize;;
    return {
      comments: Comments.find({
        sourceId : this.state.lesson._id
      },{sort: {createdAt: this.state.sortValue}}).fetch(),
      loadingComments: !sub.ready()
    }
  },
  getInitialState() {
    var lesson = Session.get('currentLesson') || {};
    return {
      lesson   : lesson,
      sortValue: 1
    };
  },
  playVideo(){
    this.refs.astro_video_hero.style.display = 'none';
    this.refs.video.style.display = 'block';
  },
  onSortComments(value){
    this.setState({sortValue: value});
  },
  getSelection(value) {
    return this.state.sortValue === value ? 'astro_video_comments_info_selected': '';
  },
  render() {
    const lesson = this.state.lesson;

    if (this.data.loadingComments) {
        return <Loader></Loader>
    }
    return (
      <section className="astro_main_container">
        <video className="astro_video" ref="video" controls>
          <source src={lesson.videoFile} type="video/mp4"/>
        </video>
        <div ref="astro_video_hero" className="astro_video_hero">
          <span onClick={this.playVideo}>
            <img src="http://localhost:3000/img//play.png"></img>
          </span>
          <div>
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
          </div>
        </div>
        <div className="astro_video_comments_info">
          <span>{this.data.comments.length} COMMENTS</span>
          <ul>
            <li onClick={this.onSortComments.bind(this, -1)} className={this.getSelection(-1)}>
              Nuevos
            </li>
            <li  onClick={this.onSortComments.bind(this, 1)} className={this.getSelection(1)}>
              Viejos
            </li>
          </ul>
        </div>
        <CommentsList comments={this.data.comments}/>
        <Commentform/>
        <Footer/>
      </section>
    )
  }
});
