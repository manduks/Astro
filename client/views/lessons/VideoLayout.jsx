const S3Upload = BlazeToReact('s3_upload');

VideoLayout = React.createClass({
  mixins: [DOM],
  render() {
    return (
      <section className="astro_main_container">
        <div className="astro_video_hero">
          <span>
            <img src="img/play.png"></img>
          </span>
          <div>
            <h2>Que es REact?</h2>
            <p>Configurando nuestro entorno de desarrollo</p>
          </div>
        </div>
        <S3Upload />
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
        <CommentsList/>
        <Commentform/>
        <Footer/>
      </section>
    )
  }
});
