VideoLayout = React.createClass({
  mixins: [Utils],
  getInitialState() {
    var lesson = Session.get('currentLesson') || {};
    return lesson;
  },
  playVideo(){
    this.refs.astro_video_hero.style.display = 'none';
    this.refs.video.style.display = 'block';
  },
  render() {
    const lesson = this.state;
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
          <span>23 COMMENTS</span>
          <ul>
            <li>
              Nuevos
            </li>
            <li className="astro_video_comments_info_selected">
              Viejos
            </li>
          </ul>
        </div>
        <CommentsList lessonId={this.state._id}/>
        <Commentform/>
        <Footer/>
      </section>
    )
  }
});
